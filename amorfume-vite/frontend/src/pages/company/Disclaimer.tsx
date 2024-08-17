import { Link } from "react-router-dom"
import MaxWidthWrapper from "../../@/components/MaxWidthWrapper"
import Footer from "../../components/Footer"
import Header from "../../components/Header"


const Disclaimer = () => {
return(
    <div className="bg-slate-100">
    <Header />
    <MaxWidthWrapper>
    <div >
<div className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-6">Amorfume - Disclaimers</h1>



<h2 className="text-xl font-semibold mb-2">Ingredient Disclosure:
</h2>
{/* 
<p className="mb-4">
    We may collect the following information:
</p> */}

<ul className="list-disc list-inside mb-4">
    <li>Our fragrances are crafted with a blend of premium natural and synthetic ingredients.</li>
    <li>Major ingredients detail is available on each product page and packaging. A complete list of ingredients is available upon request.</li>
    <li>We use Alcohol Denatured - BHT free as a solvent in our fragrances</li>
    <li>For all children's perfumes and some adult perfumes, we use demineralized water or Aqua Base formulation as a solvent in our fragrances.</li>
</ul>

<h2 className="text-xl font-semibold mb-2">Fragrance Sensitivity:</h2>
{/* 
<p className="mb-4">
    We require this information to understand your needs and provide you with a better service, and in
    particular
    for
    the following reasons:
</p> */}

<ul className="list-disc list-inside mb-4">
    <li>We recommend conducting a patch test before full application to ensure compatibility with your skin.</li>
    <li>If you have known allergies, please review our detailed ingredient lists or contact our customer service for guidance.
    </li>
    {/* <li>Sending promotional emails about new products, special offers, or other information which we think you
        may
        find
        interesting</li>
    <li>From time to time, we may also use your information to contact you for market research purposes. We may
        contact
        you by email, phone, or mail. We may use the information to customize the website according to your
        interests.</li> */}
</ul>

<h2 className="text-xl font-semibold mb-2">Safety Information:</h2>

<p className="mb-4">
Safety is paramount at Amorfume. Please adhere to the following guidelines:
</p>
<ul className="list-disc list-inside mb-4">
    <li>Keep out of reach of children.</li>
    <li>Do not apply to broken or irritated skin.</li>
    <li>Our products are formulated for topical use on adults.</li>
    <li>Fragrances are flammable; keep away from heat and open flames.</li>
    <li>Avoid contact with eyes and irritated skin. Discontinue use if irritation occurs and consult a physician.</li>
</ul>

<h2 className="text-xl font-semibold mb-2">Ingredient Variations:
</h2>

<p className="mb-4">
Natural variations in raw materials may result in slight differences between batches. These variations are a hallmark of our artisanal quality
</p>
{/* 
<p className="mb-4">
    Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find
    useful
    and which you do not. A cookie in no way gives us access to your computer or any information about you,
    other
    than
    the data you choose to share with us.
</p> */}

<h2 className="text-xl font-semibold mb-2">Personal Variation:</h2>

<p className="mb-4">
Fragrance perception is subjective and influenced by individual skin chemistry, environment, and personal preferences. 
While Amor-AI strives for precision, individual experiences may vary. The same perfume may smell different on different people.
</p>

<h2 className="text-xl font-semibold mb-2">Environmental and Ethical Statements:</h2>

{/* <p className="mb-4">
    You may choose to restrict the collection or use of your personal information in the following ways:
</p> */}

<ul className="list-disc list-inside mb-4">
    <li> We are committed to cruelty-free practices; no animals are harmed in the making of our products.</li>
    <li> We use recyclable packaging materials and are working towards a zero-waste production process. please visit our Sustainability page.</li>
    {/* <li>You may request details of personal information which we hold about you. If you would like a copy of the
        information held on you, please write to Amorfume, Marol, Mumbai, Maharashtra, 400059 or email
        ai4fume@gmail.com</li> */}
    {/* <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or
        email
        us as soon as possible at the above address. We will promptly correct any information found to be
        incorrect.
    </li> */}
</ul>

<h2 className="text-xl font-semibold mb-2">Regulatory Compliance:</h2>

<p className="mb-4">
Our products comply with IFRA standards, and relevant Indian regulations, including those set forth by the ‘FAFAI – Fragrance & Flavour Association of India’, and LMPC of state government.
</p>

{/* <ul className="list-disc list-inside mb-4">
    <li> We are committed to cruelty-free practices; no animals are harmed in the making of our products.</li>
    <li> We use recyclable packaging materials and are working towards a zero-waste production process. please visit our Sustainability page.</li>
    <li>You may request details of personal information which we hold about you. If you would like a copy of the
        information held on you, please write to Amorfume, Marol, Mumbai, Maharashtra, 400059 or email
        ai4fume@gmail.com</li>
    <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or
        email
        us as soon as possible at the above address. We will promptly correct any information found to be
        incorrect.
    </li>
</ul> */}


<h2 className="text-xl font-semibold mb-2">Quality Assurance:</h2>

{/* <p className="mb-4">
Our products comply with IFRA standards, and relevant Indian regulations, including those set forth by the ‘FAFAI – Fragrance & Flavour Association of India’, and LMPC of state government.
</p> */}

<ul className="list-disc list-inside mb-4">
    <li> All fragrances undergo rigorous stability and quality testing.</li>
    <li> Our dedicated quality control team ensures consistency, performance, GMP, and safety in every batch of product.</li>
    {/* <li>You may request details of personal information which we hold about you. If you would like a copy of the
        information held on you, please write to Amorfume, Marol, Mumbai, Maharashtra, 400059 or email
        ai4fume@gmail.com</li>
    <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or
        email
        us as soon as possible at the above address. We will promptly correct any information found to be
        incorrect.
    </li> */}
</ul>


<h2 className="text-xl font-semibold mb-2">Website Information:</h2>

<p className="mb-4">
The information on our website is provided for general informational purposes only. 
While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, 
express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information,
products, services, or related graphics contained on the website.
</p>

<h2 className="text-xl font-semibold mb-2">External Links:</h2>

<p className="mb-4">
Our website may contain links to other websites for your convenience. 
However, we do not endorse these sites or their content, and we are not responsible for their practices or privacy policies.
 We encourage you to review the terms and policies of any third-party websites you visit.
</p>

<h2 className="text-xl font-semibold mb-2">Intellectual Property:</h2>

<p className="mb-4">
All content on the Amorfume website, including but not limited to text, graphics, logos, images, and software, is the property of Amorfume or its content suppliers
and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of this content is prohibited.
</p>

<h2 className="text-xl font-semibold mb-2">Force Majeure</h2>

<p className="mb-4">
We are not liable for delays or failures caused by circumstances beyond our control, including natural disasters, strikes, or pandemics. 
</p>

<h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>

<p className="mb-4">
Amorfume is not liable for indirect, incidental, or consequential damages. Our total liability to you for any claims will not exceed the amount you paid for the product in question.
</p>

<h2 className="text-xl font-semibold mb-2">Indemnification
</h2>

<p className="mb-4">
You agree to indemnify Amorfume against any claims, damages, or expenses arising from your use of our products or services.
</p>

<h2 className="text-xl font-semibold mb-2">Governing Law</h2>

<p className="mb-4">
These terms are governed by the laws of India. Any disputes will be resolved in the courts of Mumbai, Maharashtra.</p>



<h2 className="text-xl font-semibold mb-2">Changes to This Disclaimer</h2>

<p className="mb-4">
We may update this disclaimer from time to time. Changes will be posted on this page and are effective immediately upon posting.
</p>

<h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>

<p className="mb-4">
For information on how we collect, use, and protect your data, please refer to our <Link to="/privacy">Privacy Policy.</Link> 
</p>

<h2 className="text-xl font-semibold mb-2">Promotional Offers:</h2>

<p className="mb-4">
Promotional offers are subject to specific terms and conditions and may change without notice</p>

<h2 className="text-xl font-semibold mb-2">Customer Support:</h2>

<p className="mb-4">
For any questions, concerns, or adverse reactions, please contact our support team at <Link to="mailto:hello@amorfume.com"><u>hello@amorfume.com</u></Link>  or <Link to="tel:+91 92210 97213"><u>+91-92210 97213</u></Link> 
</p>







<p className="mb-4">

</p>
</div>
</div>
    </MaxWidthWrapper>
    <Footer />
</div>
)
}

export default Disclaimer