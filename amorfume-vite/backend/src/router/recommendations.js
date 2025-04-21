const express = require('express');
const router = express.Router();
const Product = require('../model/productModel'); // Ensure your product model is set up correctly

// POST /api/recommend
// Expects { answers: string[] } in the request body
router.post('/recommend', async (req, res) => {
    try {
        const { answers } = req.body;
        if (!answers || answers.length < 5) {
            return res.status(400).json({ message: "Please provide all 5 answers." });
        }

        // Build filters based on the answers for a strict search
        const filters = {};

        // Answer 1: Who will be using this perfume?
        const recipient = answers[0].toLowerCase();
        if (recipient.includes("child")) {
            filters.category = "kids";
        } else if (recipient.includes("teen")) {
            filters.category = "teens";
        } else if (recipient.includes("adult")) {
            filters.category = "adult";
        } else if (recipient.includes("unisex")) {
            filters.category = "unisex";
        }

        // Answer 2: What kind of feeling would you like the perfume to evoke? (feelings)
        if (answers[1]) {
            filters.feelings = { $regex: new RegExp(answers[1], "i") };
        }

        // Answer 3: Which type of fragrance notes do you enjoy? (fragranceNotes.olfactiveFamily)
        if (answers[2]) {
            filters["fragranceNotes.olfactiveFamily"] = { $regex: new RegExp(answers[2], "i") };
        }

        // Answer 4: When do you plan to wear this perfume? (occasions)
        if (answers[3]) {
            filters.occasions = { $regex: new RegExp(answers[3], "i") };
        }

        // Answer 5: Which bottle style and size do you prefer? (bottleOptions)
        // Note: We keep this filter if needed, but scoring will handle multiple bottle options.
        if (answers[4]) {
            // We do not use .toLowerCase() here because bottleOptions is an array
            filters.bottleOptions = { $exists: true };
        }

        // --- NEW LOGIC ---
        // Broad search based on category.
        let allCandidates = await Product.find({ category: filters.category }).limit(50);

        // Define target criteria based on user's answers.
        const target = {
            feelings: answers[1] || "",
            olfactive: answers[2] || "",
            occasion: answers[3] || "",
            bottle: answers[4] || ""
        };

        // Scoring function: higher score means a better match.
        const scored = allCandidates.map(p => {
            let score = 0;
            // Score feelings match.
            if (p.feelings && target.feelings && p.feelings.some(f => f.toLowerCase().includes(target.feelings.toLowerCase()))) {
                score++;
            }
            // Score fragrance notes match.
            if (p.fragranceNotes && p.fragranceNotes.olfactiveFamily && target.olfactive && p.fragranceNotes.olfactiveFamily.toLowerCase().includes(target.olfactive.toLowerCase())) {
                score++;
            }
            // Score occasions match.
            if (p.occasions && target.occasion && p.occasions.some(o => o.toLowerCase().includes(target.occasion.toLowerCase()))) {
                score++;
            }
            // Score bottle options: iterate over array and match the "type" property.
            if (p.bottleOptions && target.bottle && Array.isArray(p.bottleOptions)) {
                if (p.bottleOptions.some(opt => opt.type && opt.type.toLowerCase().includes(target.bottle.toLowerCase()))) {
                    score++;
                }
            }
            return { product: p, score };
        });

        // Sort candidates by score (highest first)
        scored.sort((a, b) => b.score - a.score);
        // console.log("Scored candidates:", scored);
        
        // Pick the top 5 results
        const topMatches = scored.slice(0, 5).map(s => s.product);
        if (!topMatches || topMatches.length === 0) return res.json([]);

        // Return the top 5 scored products
        return res.json(topMatches);
    } catch (err) {
        console.error("Error in recommendations:", err);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
