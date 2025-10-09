import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  //eg1
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  //eg 2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  //eg3
  const [newProductIag, setNewProductImg] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const inputImg = useRef(0);

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProductImg(false);
    }
  };
  return (
    <div>
      {/* eg1 */}
      <input type="text" placeholder="Type here..." ref={inputRef} />
      <button onClick={focusInput}>Focus button</button>
      {/* eg2 */}
      <h2>timer:{sec}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      {/* eg 3 */}
      <input type="file" ref={inputImg} onChange={handleimage} hidden />
      {newProductIag ? (
        <div onClick={() => inputImg.current.click()} className="container">
          upload image
        </div>
      ) : (
        <img
          onClick={() => inputImg.current.click()}
          className="imgContainer"
          src={imageURL}
        />
      )}
    </div>
  );
}
