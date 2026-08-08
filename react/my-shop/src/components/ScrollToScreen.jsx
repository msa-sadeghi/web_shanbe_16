import { useEffect, useRef } from "react";

export default function ScrollToScreen() {
  const sectionRef = useRef(null);
  //   const scrollToSection = () => {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   };
  useEffect(() => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div>
      {/* <button onClick={scrollToSection}>go to</button> */}
      <div style={{ height: "1000px" }}>another content...</div>
      <section ref={sectionRef}>
        <h2>another content</h2>
      </section>
    </div>
  );
}
