import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-md">
      <div className="p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <h5 className="text-h5 font-bold">{title}</h5>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <p className="p-4 text-h6">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
