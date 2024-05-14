import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      label: "first card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "second card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "third card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "fourth card",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
  ];

  function handleScroll(){
    let pos = ref.current.getBoundingClientRect().top
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    })
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScroll}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
