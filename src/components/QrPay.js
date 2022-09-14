import { useState } from "react";
import QRCode from "react-qr-code";

function QrPay() {
  const [value, setValue] = useState();
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(256);

  return (
    
    <div className="App" style={{backgroundColor:"#ffe6ff"}}>
        
      <center>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setValue(3)}
          placeholder="Enter your OTP"
        />
        <br />
        <br />
        <h1
          className="text-xl-center"
          style={{ fontFamily: "serif", color: "#000080" }}
        >
          {" "}
          CulturOFest <i class="fa fa-ravelry" aria-hidden="true" />{" "}
        </h1>

        <h1 style={{color:"#b30000"}}> Thank You For Choosing Us To Celebrate Your Festival </h1>
        <h2>
          This is Your Entry Pass.Please Keep it with you when you visit the
          festival
        </h2>
        {/* <input
        type="text"
        onChange={(e) => setBack(e.target.value)}
        placeholder="Background color"
        /> */}
        <br />
        <br />
        {/* <input
        type="text"
        onChange={(e) => setFore(e.target.value)}
        placeholder="Foreground color"
        /> */}
        <br />
        <br />
        {/* <input
        type="number"
        onChange={(e) => setSize(parseInt(e.target.value ===
                        '' ? 0 : e.target.value, 10))}
        placeholder="Size of Qr-code"
        /> */}
        <br />
        <br />
        <br />
        {value && (
          <QRCode
            title="GeeksForGeeks"
            value={value}
            bgColor={back}
            fgColor={fore}
            size={size === "" ? 0 : size}
          />
        )}
      </center>
    </div>
  );
}

export default QrPay;
