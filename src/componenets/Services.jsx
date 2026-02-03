import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const slider = sliderRef.current;
    const card = slider.querySelector(".service-card");
    const gap = 20;
    const scrollAmount = card.offsetWidth + gap;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // 👉 RIGHT ARROW
    if (dir === 1) {
      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }

    // 👉 LEFT ARROW
    if (dir === -1) {
      if (slider.scrollLeft <= 5) {
        slider.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  // ✅ NEW: scroll to clicked card
  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    const card = slider.querySelector(".service-card");
    const gap = 20;
    const cardWidth = card.offsetWidth + gap;

    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="services">
      <h1 className="service-heading">Services</h1>
      <div className="services-wrapper">
        <button className="arrow left" onClick={() => scroll(-1)}>
          <FaChevronLeft />
        </button>

        <div className="services-slider" ref={sliderRef}>
          <div className="service-card" onClick={() => scrollToCard(0)}>
            <h1> Website Development</h1>
            <h4>
              We build clean, mobile-friendly websites that help customers
              understand your business and contact you easily.
            </h4>
            <p>
              <li>1–5 page websites</li>
              <li> WhatsApp contact / order button</li>
              <li>Business info (services, products, prices)</li>
              <li> Mobile-friendly design</li>
            </p>
          </div>
          <div className="service-card" onClick={() => scrollToCard(1)}>
            <h1> Logo Refresh & Branding</h1>
            <h4>Already have a logo but it looks outdated? We modernize it.</h4>
            <p>
              <li>Logo refresh (clean & modern)</li>
              <li> Color suggestions</li>
              <li>Font suggestions</li>
              <li> Brand consistency</li>
            </p>
          </div>
          <div className="service-card" onClick={() => scrollToCard(2)}>
            <h1> Social Media Graphics</h1>
            <h4>
              Simple, clean designs you can use on WhatsApp, Instagram, or
              TikTok.
            </h4>
            <p>
              <li>Product or promo designs</li>
              <li>Banners & simple flyers</li>
            </p>
          </div>
        </div>

        <button className="arrow right" onClick={() => scroll(1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Services;
