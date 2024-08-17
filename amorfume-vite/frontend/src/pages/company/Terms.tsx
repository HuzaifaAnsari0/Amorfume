import { Link } from "react-router-dom"
import MaxWidthWrapper from "../../@/components/MaxWidthWrapper"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Terms = () => {
    return(
        <div className="bg-slate-100">
            <Header />
            <MaxWidthWrapper>
            <div>
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms Of Service</h1>
        <h4 className="text-1xl font-bold mb-4">(The Not-So-Boring Legal Stuff) </h4>

        <p className="mb-4">
           
Last updated: [28th July, 2024]
        </p>

        <h2 className="text-xl font-bold mb-2">1. INTRODUCTION</h2>

        <p className="mb-4">
        Welcome to Amorfume.com ("Website"), operated by Amor-AI Technology Enterprise ("Amorfume", "we", "us", or "our").
         By accessing or using our website, mobile application, or any related services (collectively, "Services"), 
         you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, 
         please refrain from using our Services.
        </p>

        <h2 className="text-xl font-bold mb-2">2. DEFINITIONS</h2>

        <p className="mb-4">
        "Customer", "You", or "User" refers to any person who accesses or uses our Services.
        "Products" refers to fragrances, perfumes, and any other items offered for sale on our website.
        "Amor-AI" refers to our proprietary artificial intelligence technology used for fragrance recommendations and personalization.

        </p>

        <h2 className="text-xl font-bold mb-2">3. ELIGIBILITY
        </h2>

        <p className="mb-2">
        3.1. Age Requirement: You must be at least 18 years old to use our Services. If you are between 13 and 
        18 years old, you may use our Services only under the supervision of a parent or legal guardian who agrees 
        to be bound by these Terms.
        </p>
        <p className="mb-4">
        3.2. Legal Capacity: Use of our Services is available only to individuals who can form legally binding contracts
         under applicable law. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872, 
         including un-discharged insolvents, are not eligible to use our Services.
        </p>

     
        <h2 className="text-xl font-bold mb-2">4. ACCOUNT REGISTRATION
        </h2>

        <p className="mb-2">
        4.1. Account Creation: To access certain features of our Services,
         you may need to create an account. You agree to provide accurate, current, 
         and complete information during the registration process and to update such information to keep it accurate, current, and complete.
        </p>
        <p className="mb-2">
        4.2. Account Security: You are responsible for maintaining the confidentiality of your account and password.
        You agree to accept responsibility for all activities that occur under your account or password. If you suspect any
        unauthorized use of your account, notify us immediately.
        </p>
        <p className="mb-4">
        4.3. Account Termination: We reserve the right to suspend or terminate your account at our sole discretion, 
        without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, 
        or for any other reason.
        </p>


        <h2 className="text-xl font-bold mb-2">5. PRODUCTS AND SERVICES
        </h2>

        <p className="mb-2">
        5.1. Product Information: We strive to provide accurate product descriptions, including fragrance compositions, 
        concentrations, and volumes. However, we do not warrant that product descriptions or other content on the Website are accurate, 
        complete, reliable, current, or error-free.
        </p>
        <p className="mb-2">
        5.2. Fragrance Composition: Our fragrances are formulated with a proprietary blend of essential oils, aroma compounds, 
        fixatives, and solvents. While specific formulations are proprietary, we comply with global regulations and IFRA standards
        of 51st Amendment, with COA, MSDS. A full list of ingredients for each product is available upon request.
        </p>

        <p className="mb-2">
        5.3. Concentrations: We offer the following concentrations:
        <p>- Eau de Parfum (EDP): 15-20% aromatic compounds</p>
        <p>- Extrait de Parfum: 20-30% aromatic compounds</p>
        </p>
        
        <p className="mb-2">
       5.4. Volumes: Our products are available in the following sizes in compliance with LMPC act of Government of Maharashtra:
        <p>- 30ml (1 fl oz)</p>
        <p>- 50ml (1.7 fl oz)</p>
        <p>- 100ml (1.7 fl oz)</p>
        </p>

        <p className="mb-2">
        5.5. Shelf Life:
        <p>- Unopened: 1-2 years from the blended date</p>
        <p>- Opened: Best used within 12 months</p>
       
        </p>

        <p className="mb-2">
        5.6. Customization: Some of our products may offer customization options. 
        The availability and terms of customization will be specified on the product page.
        </p>

        <p className="mb-4">
       5.7. Our perfumes are formulated with safe, high-quality ingredients. Please review the ingredient list 
       provided on packaging and follow usage instructions carefully. If you experience any adverse reactions, discontinue
       use immediately and consult a physician.
        </p>


        <h2 className="text-xl font-bold mb-2">6. AMOR-AI TECHNOLOGY
        </h2>
        <p className="mb-2">
            6.1. AI-Generated Recommendations: Our Amor-AI technology 
            provides personalized fragrance recommendations based on user inputs and proprietary algorithms.
            While we aim for high accuracy, satisfaction with recommendations is not guaranteed.
        </p>

        <p className="mb-2">
        6.2. Data Usage: By using our AI services, you consent to the collection, analysis, and use of your data
         for fragrance personalization as outlined in our Privacy Policy. We adhere to global data protection regulations,
          including GDPR, CCPA, and applicable Indian data protection laws.
        </p>

        <p className="mb-2">
           6.3. AI Transparency: Our AI uses machine learning models trained on fragrance preferences but does not retain individual
           user data after processing. We regularly audit our AI for bias and fairness in recommendations.
        </p>

        <p className="mb-2">
        6.4. The AI Magic
        <p>- Our Amor-AI crafts personalized fragrances tailored to your preferences.</p>
        <p>- While we strive for excellence, we cannot guarantee universal satisfaction with the AI-generated scent.</p>
       
        </p>


        <p className="mb-4">
        6.5. By registering on Amorfume, you consent to receive electronic communications from us. These communications may include account
         updates, order confirmations, and promotional messages. You can opt-out of promotional communications at any time by following the 
         unsubscribe instructions provided in the email.
        </p>


        <h2 className="text-xl font-bold mb-2">7. ORDERING AND PAYMENT
        </h2>
        <p className="mb-2">
           7.1. Order Acceptance: All orders are subject to acceptance and availability.
            We reserve the right to refuse or cancel any order for any reason, including but not limited to product
            availability, errors in product or pricing information, or suspected fraud.
        </p>

        <p className="mb-2">
        7.2. Pricing: All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes but exclusive of shipping fees.
        Prices are subject to change without prior notice.

        </p>

        <p className="mb-2">
            7.3. Payment Methods: We accept major credit cards, debit cards, net banking, UPI, and other payment methods as indicated on our website. 
            All transactions are processed securely through industry-standard encryption and third-party payment gateways. In case of payment failures, 
            alternative payment methods may be used. Your payment details are not stored by us and are processed securely by our payment gateway provider.
        </p>

        <p className="mb-2">
        7.4. Digital Gift Cards and Promotional Codes: These are subject to specific terms of use and expiration dates
         as communicated at the time of issuance.
        </p>

        <p className="mb-4">
        7.5. Any suspected fraudulent transactions will result in the immediate suspension of the associated account and may lead 
        to legal action. We reserve the right to recover the cost of goods, collection charges, and lawyers' fees from individuals involved
         in fraudulent activities.
        </p>

     
        <h2 className="text-xl font-bold mb-2">8. SHIPPING AND DELIVERY
        </h2>
        <p className="mb-2">
        8.1. Processing Time: Standard orders are typically processed within 1-2 business days. 
        Custom fragrances may require additional processing time.
        </p>

        <p className="mb-2">
        8.2. Shipping Options: We offer various shipping methods, including standard and express delivery.
         Shipping times and costs will vary based on the destination and chosen shipping method.
        </p>

        <p className="mb-2">
        8.3. International Orders: We ship to most countries worldwide. Customers are responsible for any customs duties,
         taxes, or additional charges imposed by their country of residence.
        </p>

        <p className="mb-4">
        8.4. Shipping Restrictions: Certain products may be restricted for international shipping due to local regulations.
        We comply with all international shipping regulations and provide necessary documentation for customs clearance.
        </p>


        <h2 className="text-xl font-bold mb-2">9. RETURNS, REFUNDS, AND EXCHANGES
        </h2>
        <p className="mb-2">
        9.1. Return Policy: Due to the custom nature of our personalized blending products, returns or
         exchanges are generally not accepted. We recommend trying our Insight kits before placing an order. 
         This policy complies with the Consumer Protection Act, 2019. For any concerns or further assistance,
          please contact our customer service team.
        </p>

        <p className="mb-2">
            9.2. Defective or Incorrect Products: If you receive a defective or incorrect product, 
            please contact our customer service within 24 hours of delivery. We will replace the product at no extra
            cost or offer a refund, at our discretion.
        </p>

        <p className="mb-2">
        9.3. Satisfaction Guarantee: For custom fragrances, we offer a Satisfaction Guarantee program where we will work 
        with you to adjust the fragrance to your satisfaction.

        </p>

        <p className="mb-4">
        9.4. Refund Process: Approved refunds will be processed to the original payment method within 5-10 business days 
        of approval. Refunds will cover the purchase price excluding shipping costs
        </p>


        <h2 className="text-xl font-bold mb-2">10. INTELLECTUAL PROPERTY
        </h2>
        <p className="mb-2">
        10.1. Ownership: All content on the Amorfume website, including but 
        not limited to text, graphics, logos, button icons, images, audio clips, 
        digital downloads, data compilations, software, and Amor-AI algorithms, is the property of 
        Amorfume or its content suppliers and is protected by Indian and international copyright laws. , 
        including the Copyright Act, 1957 and the Trade Marks Act, 1999. Unauthorized use or reproduction of our content is prohibited.
        </p>

        <p className="mb-2">
        10.2. Limited License: We grant you a limited, revocable, and non-exclusive right to access and make 
        personal use of the Website. This license does not include any resale or commercial use of the Website or its contents; 
        any collection and use of any product listings, descriptions, or prices; any derivative use of the Website or its contents; 
        any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar 
        data gathering and extraction tools.

        </p>

        <p className="mb-2">
        10.3. Trademarks: Amorfume™, Amor-AI™, and other marks indicated on our website are trademarks of Amorfume or its 
        affiliates in India and other countries. Our graphics, logos, page headers, button icons, scripts, and service names 
        are also trademarks or trade dress of Amorfume. You may not use these marks without our prior written permission.
        </p>

        <p className="mb-4">
        10.4. User-Generated Content: By submitting reviews, comments, or other content to Amorfume, you grant us a non-exclusive, 
        royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, 
        create derivative works from, distribute, and display such content throughout the world in any media.
        </p>


        <h2 className="text-xl font-bold mb-2">11. USER CONDUCT
        </h2>
        <p className="mb-2">
        11.1. Prohibited Activities: You agree not to engage in any of the following prohibited activities:
        <p>- Violating any applicable laws or regulations</p>
        <p>- Infringing on the intellectual property rights of others
        </p>
        <p>- Transmitting any material that is defamatory, obscene, or offensive
        </p>
        <p>- Interfering with or disrupting the Website or servers</p>
        <p>- Attempting to gain unauthorized access to any portion of the Website</p>
        <p>- Using the Website for any fraudulent or unlawful purpose
        </p>
        <p>- Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity
        </p>
        </p>
        <p className="mb-2">
        11.2. Consequences: Violation of these prohibitions may result in termination of your access to the Website and may subject
        you to civil and/or criminal liability.
        </p>

        
        <h2 className="text-xl font-bold mb-2">12. DISCLAIMER OF WARRANTIES
        </h2>
        <p className="mb-2">
        12.1. "As Is" Basis: The Website and all information, content, materials, products, and services 
        included on or otherwise made available to you through the Website are provided on an "as is" and 
        "as available" basis, unless otherwise specified in writing.
        </p>

        <p className="mb-2">
            12.2. No Warranties: We make no representations or warranties of any kind,
            express or implied, as to the operation of the Website or the information,
            content, materials, products, or services included on or otherwise made available
            to you through the Website, unless otherwise specified in writing.
        </p>

        <p className="mb-4">
        12.3. Disclaimer: To the full extent permissible by applicable law, we disclaim all warranties, 
        express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
        </p>
        

        <h2 className="text-xl font-bold mb-2">13. LIMITATION OF LIABILITY
        </h2>
        <p className="mb-2">
            13.1. Limitation: Amorfume will not be liable for any damages of any kind arising 
            from the use of the Website or any information, content, materials, products, or services included on or otherwise made
            available to you through the Website, including, but not limited to direct, indirect, incidental, punitive, and consequential
            damages, unless otherwise specified in writing.
        </p>

        <p className="mb-4">
        13.2. Maximum Liability: In no event shall our total liability to you for all damages, losses, 
        and causes of action exceed the amount paid by you, if any, for accessing the Website or purchasing products from us.
        </p>


        <h2 className="text-xl font-bold mb-2">14. INDEMNIFICATION
        </h2>
        <p className="mb-4">
        You agree to indemnify, defend, and hold harmless Amorfume, its officers, directors, employees, agents, 
        licensors and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' 
        fees, resulting from any violation of these Terms or any activity related to your account (including negligent or wrongful conduct) 
        by you or any other person accessing the Website using your account.
        </p>

        <h2 className="text-xl font-bold mb-2">15. THIRD-PARTY LINKS
        </h2>
        <p className="mb-4">
        The Website may contain links to third-party websites or resources. You acknowledge and agree that we are not 
        responsible or liable for: (i) the availability or accuracy of such websites or resources; or (ii) the content, 
        products, or services on or available from such websites or resources. Links to such websites or resources do not 
        imply any endorsement by us of such websites or resources or the content, products, or services available from such websites or resources.
        </p>

        <h2 className="text-xl font-bold mb-2">16. TERMINATION
        </h2>
        <p className="mb-4">
        We may terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately.
         If you wish to terminate this agreement, you may simply discontinue using the Website. All provisions of these Terms which by their 
         nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers,
        indemnity and limitations of liability.
        </p>

        <h2 className="text-xl font-bold mb-2">17. GOVERNING LAW AND JURISDICTION
        </h2>
        <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of India, 
        without regard to its conflict of law provisions. Any dispute arising out of or in connection with these Terms, 
        including any question regarding its existence, validity or termination, shall be referred to and finally resolved by 
        arbitration in Mumbai, Maharashtra, India in accordance with the Arbitration and Conciliation Act, 1996. 
        The language of the arbitration shall be English.
        </p>

        <h2 className="text-xl font-bold mb-2">18. CHANGES TO TERMS
        </h2>
        <p className="mb-4">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
        we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be 
        determined at our sole discretion. By continuing to access or use our website after any revisions become effective, you agree to be bound
        by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Website.
        </p>

        <h2 className="text-xl font-bold mb-2">19. SUSTAINABILITY COMMITMENT
        </h2>
        <p className="mb-4">
        Amorfume is committed to sustainable and ethical practices:
        <p>- We use responsibly sourced ingredients and are working towards full supply chain transparency by 2025.
        </p>
        <p>- Our packaging is made from recycled and recyclable materials.
        </p>
        <p>- We are certified cruelty-free as per PETA and Leaping Bunny.
        </p>
        <p>- We offset our carbon emissions through verified carbon credit programs.</p>
        </p>


        <h2 className="text-xl font-bold mb-2">20. LOYALTY PROGRAM: ESSENCE REWARDS
        </h2>
        <p className="mb-4">
        Members of our Essence Rewards program earn points on purchases, which can be redeemed for discounts, 
        exclusive products, and experiences. Separate terms apply to the loyalty program.
        </p>

        <h2 className="text-xl font-bold mb-2">21. SOCIAL MEDIA AND USER CONTENT
        </h2>
        <p className="mb-4">
        By tagging Amorfume or using our hashtags on social media, you grant us permission
         to repost or use your content for marketing purposes. We respect intellectual property 
         rights and will remove any content upon valid request.
        </p>


        <h2 className="text-xl font-bold mb-2">22. SUBSCRIPTION SERVICES
        </h2>
        <p className="mb-4">
        Our Perfume Insights Subscription service is billed monthly and can be cancelled at any time. 
        Specific terms for subscriptions are provided during the sign-up process.
        </p>


        <h2 className="text-xl font-bold mb-2">23. CORPORATE AND BULK ORDERS
        </h2>
        <p className="mb-4">
        For corporate gifting or bulk orders exceeding 50 units,
        please contact our dedicated B2B team for special pricing and terms.
        </p>


        <h2 className="text-xl font-bold mb-2">24. WEBSITE SECURITY
        </h2>
        <p className="mb-4">
        We use SSL encryption and regular security audits to protect user data.
        </p>


        <h2 className="text-xl font-bold mb-2">25. FORCE MAJEURE
        </h2>
        <p className="mb-4">
        We are not liable for delays or failures caused by circumstances beyond our control, including natural disasters, strikes, or pandemics.
        </p>

        
        <h2 className="text-xl font-bold mb-2">26. THE LEGAL STUFF
        </h2>
        <p className="mb-4">
        <p>
            - All content on our website is the property of Amorfume. Unauthorized reproduction or distribution is prohibited.
        </p>
        <p>
            - We are not liable for any indirect damages arising from the use of our products or services. </p>
        <p>
            - These terms are governed by the laws of India. </p>
        <p>
            - By using our AI, you consent to our collection and analysis of your preferences to create your ideal fragrance.
        </p>
        </p>

        <h2 className="text-xl font-bold mb-2">27. ENTIRE AGREEMENT
        </h2>
        <p className="mb-4">
        These Terms constitute the entire agreement between you and Amorfume regarding the use of the Website and supersede all prior agreements and understandings, whether written or oral, regarding the subject matter of these Terms.
        </p>

        <h2 className="text-xl font-bold mb-2">28. SEVERABILITY
        </h2>
        <p className="mb-4">
        If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms remain in full force and effect.
        </p>

        <h2 className="text-xl font-bold mb-2">29. CONTACT INFORMATION
        </h2>
        <p className="mb-4">
        If you have any questions about these Terms, please contact us at:
        <p>Amorfume (Amor-AI Technology Enterprises)</p>
        <p>[Andheri East, Mumbai, Maharashtra]</p>
        <p>Email: <Link to="mailto:hello@amorfume.com">  <u>hello@amorfume.com</u></Link></p>
        <p>Phone: <Link to="tel:+91 92210 97213"> <u>+91 92210 97213</u></Link></p>
        <p>By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
</p>





    </div>
</div>
            </MaxWidthWrapper>
            <Footer />
        </div>
    )
}

export default Terms