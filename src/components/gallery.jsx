import { useEffect, useState } from "react";

import {
  FaCamera,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import galleryData from "../data/galleryData";

function Gallery() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedIndex, setSelectedIndex] =
    useState(null);


  // =========================================
  // CATEGORIES
  // =========================================

  const categories = [
    "All",
    "Cafe",
    "Coffee",
    "Food",
    "Desserts",
  ];


  // =========================================
  // FILTER IMAGES
  // =========================================

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (image) =>
            image.category === activeCategory
        );


  // =========================================
  // CURRENT IMAGE
  // =========================================

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;


  // =========================================
  // OPEN LIGHTBOX
  // =========================================

  const openLightbox = (index) => {

    setSelectedIndex(index);

    document.body.style.overflow = "hidden";

  };


  // =========================================
  // CLOSE LIGHTBOX
  // =========================================

  const closeLightbox = () => {

    setSelectedIndex(null);

    document.body.style.overflow = "auto";

  };


  // =========================================
  // NEXT IMAGE
  // =========================================

  const nextImage = () => {

    setSelectedIndex(
      (previousIndex) =>
        (previousIndex + 1) %
        filteredImages.length
    );

  };


  // =========================================
  // PREVIOUS IMAGE
  // =========================================

  const previousImage = () => {

    setSelectedIndex(
      (previousIndex) =>
        previousIndex === 0
          ? filteredImages.length - 1
          : previousIndex - 1
    );

  };


  // =========================================
  // KEYBOARD CONTROLS
  // =========================================

  useEffect(() => {

    const handleKeyboard = (event) => {

      if (selectedIndex === null) {
        return;
      }


      if (event.key === "Escape") {

        closeLightbox();

      }


      if (event.key === "ArrowRight") {

        nextImage();

      }


      if (event.key === "ArrowLeft") {

        previousImage();

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

      document.body.style.overflow = "auto";

    };

  }, [selectedIndex, filteredImages.length]);


  // =========================================
  // CHANGE CATEGORY
  // =========================================

  const changeCategory = (category) => {

    setActiveCategory(category);

    closeLightbox();

  };


  return (

    <section
      id="gallery"
      className="gallery-section"
    >

      <div className="container">


        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="section-heading text-center">

          <div className="section-label">

            <FaCamera />

            Cafe Moments

          </div>


          <h2>

            A glimpse into

            <span>
              {" "}OKALI'S CAFE.
            </span>

          </h2>


          <p>

            Take a little tour through our coffee,
            food, people and the atmosphere that
            makes OKALI'S CAFE special.

          </p>

        </div>



        {/* =====================================
            CATEGORY FILTERS
        ===================================== */}

        <div className="gallery-filter">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter-button active"
                  : "gallery-filter-button"
              }
              onClick={() =>
                changeCategory(category)
              }
            >

              {category}

            </button>

          ))}

        </div>



        {/* =====================================
            GALLERY GRID
        ===================================== */}

        {filteredImages.length > 0 ? (

          <div className="gallery-grid">

            {filteredImages.map(
              (item, index) => (

                <article
                  className="gallery-item"
                  key={item.id}
                  onClick={() =>
                    openLightbox(index)
                  }
                  tabIndex="0"
                  role="button"
                  onKeyDown={(event) => {

                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {

                      openLightbox(index);

                    }

                  }}
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />


                  {/* HOVER OVERLAY */}

                  <div className="gallery-overlay">

                    <div className="gallery-overlay-content">

                      <span>
                        {item.category}
                      </span>


                      <h3>
                        {item.title}
                      </h3>

                    </div>


                    <div className="gallery-expand">

                      <FaExpand />

                    </div>

                  </div>


                  {/* IMAGE NUMBER */}

                  <span className="gallery-number">

                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}

                  </span>

                </article>

              )
            )}

          </div>

        ) : (

          /* ===================================
             EMPTY STATE
          =================================== */

          <div className="gallery-empty">

            <FaCamera />

            <h3>
              No moments found
            </h3>

            <p>
              More cafe moments are coming soon.
            </p>

          </div>

        )}



        {/* =====================================
            LIGHTBOX
        ===================================== */}

        {selectedImage && (

          <div
            className="gallery-lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
          >


            {/* CLOSE */}

            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >

              <FaTimes />

            </button>



            {/* PREVIOUS */}

            {filteredImages.length > 1 && (

              <button
                type="button"
                className="lightbox-navigation lightbox-prev"
                onClick={(event) => {

                  event.stopPropagation();

                  previousImage();

                }}
                aria-label="Previous image"
              >

                <FaChevronLeft />

              </button>

            )}



            {/* CONTENT */}

            <div
              className="lightbox-content"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <div className="lightbox-image-wrapper">

                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                />

              </div>


              {/* CAPTION */}

              <div className="lightbox-caption">

                <div>

                  <span>
                    {selectedImage.category}
                  </span>

                  <h3>
                    {selectedImage.title}
                  </h3>

                </div>


                <div className="lightbox-counter">

                  {selectedIndex + 1}

                  <span>
                    /
                  </span>

                  {filteredImages.length}

                </div>

              </div>

            </div>



            {/* NEXT */}

            {filteredImages.length > 1 && (

              <button
                type="button"
                className="lightbox-navigation lightbox-next"
                onClick={(event) => {

                  event.stopPropagation();

                  nextImage();

                }}
                aria-label="Next image"
              >

                <FaChevronRight />

              </button>

            )}

          </div>

        )}

      </div>

    </section>

  );
}

export default Gallery;