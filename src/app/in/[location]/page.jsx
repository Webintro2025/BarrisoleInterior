import ContactForm from "@/components/ContactForm";
import locations from "../../../location";


const normalizeLocation = (location) => {
  return location
    .toLowerCase()
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

export async function generateMetadata({ params }) {
  const { location } = params;
  const formattedLocation = normalizeLocation(location);

  return {
    title:` Textile Barrisol Sky Stretch Ceiling Manufacturer in ${formattedLocation}`,
    description: `Looking for Textile Barrisol Sky Stretch Ceiling Manufacturer in ${formattedLocation}? We offers Textile Barrisol Sky Stretch Ceiling Manufacturer And Services in ${formattedLocation}.`,
    keywords: [`
      Textile Barrisol Sky Stretch Ceiling Manufacturer in ${formattedLocation},
      Textile Barrisol Sky Stretch Ceiling Services in ${formattedLocation},
      Chandelier Textile Barrisol Ceiling Manufacturer in ${formattedLocation},
      Textile Barrisol Translucent Stretch Ceiling Manufacturer in ${formattedLocation},
      Textile Barrisol French Roof Stretch Ceiling Manufacturer in ${formattedLocation},
      Textile Barrisol Stretch Ceiling Industries ,
    `],
    alternates: {
      canonical: `https://textilestretchceiling.com/${location}`,
    },
  };
}

export default function LocationPage({ params }) {
  const { location } = params;
  const formattedLocation = normalizeLocation(location);

  // Normalize for case-insensitive match
  const locationName = locations.find(
    (loc) => loc.toLowerCase() === formattedLocation.toLowerCase()
  );

  if (!locationName) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Location Not Found</h1>
        <p className="text-gray-700">Sorry, the location you are looking for does not exist in our Market Place list.</p>
      </div>
    );
  }

  return (
    
 





  <main className="w-full "> 
     



<div class="relative bg-gradient-to-r from-red-500 to-blue-500 bg-cover bg-center w-full h-[220px] xs:h-[320px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[450px]">
 
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 class="text-white mt-28 font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
     Textile Barrisol Sky Stretch Ceiling Manufacturer in {formattedLocation}
    </h1>
    <p class="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://textilestretchceiling.com/">Textile Barrisol Stretch Ceiling Industries</a>, If You Are Looking For <strong>Textile Barrisol Sky Stretch Ceiling Manufacturer in {formattedLocation}</strong>, We Are The Best Option For You. <strong>Best Textile Barrisol Translucent Stretch Ceiling Manufacturer in {formattedLocation}</strong>, <strong>Textile Barrisol Sky Stretch Ceiling Services in {formattedLocation}, India.</strong>
    </p>
    <button
      class="mt-4 sm:mt-6 bg-[#F0B630] hover:bg-yellow-700 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://textilestretchceiling.com/contact">Contact Now</a></span>
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div class="bg-white px-10">
  <main class="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section class="w-full md:w-1/2 text-black">
        <h2 class="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          Textile Barrisol Sky Stretch Ceiling Manufacturer in {formattedLocation}
        </h2>
        <p class="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          At Textile Barrisol Stretch Ceiling Industries, we take pride in being the leading <strong>Textile Barrisol Sky Stretch Ceiling Manufacturer in {formattedLocation}</strong>, offering cutting-edge ceiling and wall solutions that elevate spaces with unmatched beauty and functionality. Founded under the visionary leadership of Mr. Asif Ali, our company has become a trusted name for architects, interior designers, and homeowners who seek elegance, durability, and innovation in modern interiors.

With years of expertise, we specialize in<strong> Textile Barrisol Sky Stretch Ceilings</strong>, along with a wide range of premium stretch ceiling products that transform ordinary spaces into extraordinary masterpieces.
        </p>
      </section>
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Textile Barrisol Sky Stretch Ceiling Manufacturer in ${formattedLocation}`}
          class="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[400px] shadow"
          
          src="/TEXTILE BARRISOL SKY STRETCH CEILING.png"
        
        />
      </div>
    </div>
  </main>
</div>



<hr />












<div class="bg-white text-[#1a1a1a] w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <div class="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-b border-gray-300 py-4 sm:py-6">
    <div class="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pr-0 md:pr-6 pb-6 md:pb-0">
      <h2 class="text-base xs:text-lg sm:text-xl md:text-2xl text-center leading-[1.2] mb-4 sm:mb-8 font-semibold">
       Why Choose Us as Your Textile Barrisol Sky Stretch Ceiling Services in {formattedLocation} 
      </h2>
      <div class="text-xs xs:text-sm sm:text-base text-gray-800 leading-relaxed text-left space-y-3">
        <p>
<h3 className="font-semibold mt-2 mb-1">Unmatched Expertise –:</h3> With years of experience, we bring innovation and perfection to every project.
<h3 className="font-semibold mt-2 mb-1">Premium Quality Materials –:</h3> Our ceilings are designed to last, made from world-class materials that ensure durability and safety.
<h3 className="font-semibold mt-2 mb-1">Customized Designs –:</h3> We offer tailor-made solutions to match the exact vision of our clients.
<h3 className="font-semibold mt-2 mb-1">Eco-Friendly & Sustainable –:</h3> Designed with sustainability in mind, our products are safe for the environment.
<h3 className="font-semibold mt-2 mb-1">Trusted by Industry Leaders –:</h3> From homes to hotels, offices to commercial complexes, our ceilings redefine luxury in every space.

        </p>
        
      </div>
    </div>
    <div class="w-full md:w-1/2 pl-0 md:pl-6 p-16">
      <ContactForm />

     
    </div>
  </div>
</div>



<div class="bg-yellow-100 border border-yeloow-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 class="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p class="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Textile Barrisol Sky Stretch Ceiling in {formattedLocation}</strong>? Textile Barrisol Stretch Ceiling Industries is your trusted partner.</p> <br/> 
      <ul class="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong>+91-9718921229</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://textilestretchceiling.com/"> – www.textilestretchceiling.com</a></li>
      <li>👉 <strong>Our Email Address</strong> – textilebarrisol@gmail.com </li>
    </ul>
  </div>

<div class="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 class="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Our Product Range in {formattedLocation}
  </h2>
  <p>
    At Textile Barrisol Stretch Ceiling Industries, we offer a complete range of premium stretch ceilings designed to meet diverse interior needs. Each product is crafted with advanced technology and innovative <a href="https://en.wikipedia.org/wiki/Dropped_ceiling">design concepts.</a>
  </p>

  <ul class="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
  <li>
    <span className="font-bold">1. Textile Barrisol Sky Stretch Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    Our flagship product, the Textile Barrisol Sky Stretch Ceiling, is designed to create the illusion of a vast open sky indoors. With customizable prints and realistic sky patterns, this ceiling is perfect for homes, hotels, spas, offices, and wellness centers. It not only enhances aesthetics but also improves the overall ambience, making spaces feel larger, brighter, and more serene.
  </li>
  <li>
    <span className="font-bold">2. Chandelier Textile Barrisol Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    For those seeking luxury and grandeur, our Chandelier Barrisol Ceilings combine modern stretch technology with elegant lighting. Perfect for banquet halls, lobbies, and high-end residences, these ceilings create a statement of opulence and sophistication.
  </li>
  <li>
    <span className="font-bold">3. Textile Barrisol Fabric Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    Our fabric stretch ceilings offer a smooth, seamless finish that enhances both beauty and functionality. They are lightweight, easy to install, and available in multiple textures and finishes to suit any décor style.
  </li>
  <li>
    <span className="font-bold">4. Textile Barrisol Translucent Stretch Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    The translucent stretch ceiling allows light to pass through, creating stunning backlit effects. It is widely used in restaurants, offices, showrooms, and retail spaces, giving interiors a modern, futuristic appeal.
  </li>
  <li>
    <span className="font-bold">5. Textile Barrisol Moving Cloud Stretch Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    Bring dynamism into your interiors with our Moving Cloud Stretch Ceilings, which create the illusion of floating clouds in motion. Ideal for luxury lounges, hotels, and modern living spaces, these ceilings add a unique visual charm and relaxing atmosphere.
  </li>
  <li>
    <span className="font-bold">6. Textile Barrisol Decorative Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    With endless design possibilities, our decorative ceilings allow clients to personalize their interiors with unique patterns, artistic prints, and vibrant color schemes. These ceilings are highly customizable to match any theme.
  </li>
  <li>
    <span className="font-bold">7. Textile Barrisol French Roof Stretch Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    Inspired by French architectural elegance, the French Roof Stretch Ceiling adds a classic and timeless appeal to interiors. It is especially popular in heritage projects, villas, and premium commercial spaces.
  </li>
  <li>
    <span className="font-bold">8. Barrisol 2x2 Panel Printed Tile Manufacturer And Services in {formattedLocation}:</span><br />
    Our 2x2 Panel Printed Tiles are a perfect blend of modern technology and design flexibility. These panels are easy to install and can be printed with custom graphics, logos, or patterns, making them an excellent choice for corporate and commercial projects.
  </li>
  <li>
    <span className="font-bold">9. TEXTILE MURAL ART WALL and CEILING Manufacturer And Services in {formattedLocation}:</span><br />
    For those who want to integrate art into architecture, our Mural Art Walls and Ceilings offer the perfect solution. From abstract art to themed murals, we transform spaces into captivating works of art.
  </li>
  <li>
    <span className="font-bold">10. RGBWW Pixel Asif Textile Barrisol Stretch Ceiling Manufacturer And Services in {formattedLocation}:</span><br />
    Our RGBWW Pixel Ceilings use advanced lighting technology to create immersive environments with dynamic color-changing effects. Ideal for clubs, auditoriums, shopping malls, and entertainment spaces, these ceilings redefine modern interiors.
  </li>
</ul>

</div>

<hr />




<hr />
<div class="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 class="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p class="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 If you are searching for the best<strong> Textile Barrisol Sky Stretch Ceiling Manufacturer in {formattedLocation}</strong>, look no further than Textile Barrisol Stretch Ceiling Industries. With a rich product portfolio, innovative designs, and a strong legacy of excellence, we are committed to transforming spaces into extraordinary works of art.
[<a href="https://textilestretchceiling.com/contact">"Contact Us for a Quote"</a>]

  </p>
</div>

    </main>





    
  );
}
