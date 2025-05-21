import gallery1 from "../assets/gallery-1.mp4";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";
import gallery5 from "../assets/gallery-5.png";
import gallery6 from "../assets/gallery-6.png";

const galleryItems = [
  {
    type: "video",
    src: gallery1,
    caption: "Structured tailoring for all-<br />day movement",
  },
  {
    type: "image",
    src: gallery2,
    caption: "Premium wool blend in <br />signature vermillion",
  },
  {
    type: "image",
    src: gallery3,
    caption: "Discreet side pockets <br />with clean finish",
  },
  {
    type: "image",
    src: gallery4,
    caption: "Hand-cut and<br />assembled in small<br />batches",
  },
  {
    type: "image",
    src: gallery5,
    caption: "",
  },
  {
    type: "image",
    src: gallery6,
    caption: "",
  },
];

const Gallery = () => (
  <section className="p-4 sm:p-8 space-y-8">
    {/* Mobile View */}
    <div className="block sm:hidden space-y-4">
      {/* Gallery 1 - full width */}
      <div className="relative group w-full">
        <video
          src={galleryItems[0].src}
          className="w-full h-64 object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black/40 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p
            dangerouslySetInnerHTML={{ __html: galleryItems[0].caption }}
          />
        </div>
      </div>

      {/* Gallery 2, 3, 4 */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative group h-32 overflow-hidden rounded-lg">
            <img
              src={galleryItems[i].src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 left-1 text-white text-[10px] font-medium bg-black/40 px-1 py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p
                dangerouslySetInnerHTML={{ __html: galleryItems[i].caption }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop View */}
    <div className="hidden sm:grid sm:grid-cols-3 sm:gap-4">
      {/* Row 1: Video + Image */}
      <div className="col-span-2 relative group">
        <video
          src={galleryItems[0].src}
          className="w-full h-84 object-cover rounded-lg group-hover:brightness-50 group-hover:scale-105 transition-all duration-300"
          style={{ aspectRatio: "16/9" }}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute bottom-4 left-4 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p
            dangerouslySetInnerHTML={{ __html: galleryItems[0].caption }}
          />
        </div>
      </div>

      <div className="col-span-1 relative group">
        <img
          src={galleryItems[1].src}
          alt="Gallery 2"
          className="w-full h-84 object-cover rounded-lg group-hover:brightness-50 group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute bottom-4 left-4 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p
            dangerouslySetInnerHTML={{ __html: galleryItems[1].caption }}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="col-span-1 relative group">
        <img
          src={galleryItems[2].src}
          alt="Gallery 3"
          className="w-full h-84 object-cover rounded-lg group-hover:brightness-50 group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute bottom-4 left-4 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p
            dangerouslySetInnerHTML={{ __html: galleryItems[2].caption }}
          />
        </div>
      </div>

      <div className="col-span-1 relative group">
        <img
          src={galleryItems[3].src}
          alt="Gallery 4"
          className="w-full h-84 object-cover rounded-lg group-hover:brightness-50 group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute bottom-4 left-4 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p
            dangerouslySetInnerHTML={{ __html: galleryItems[3].caption }}
          />
        </div>
      </div>

      <div className="col-span-1 relative group h-84">
        <img
          src={galleryItems[4].src}
          alt="Gallery 5"
          className="w-full h-full object-cover rounded-lg absolute transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={galleryItems[5].src}
          alt="Gallery 6"
          className="w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  </section>
);

export default Gallery;
