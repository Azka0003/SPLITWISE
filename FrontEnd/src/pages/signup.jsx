import { Link } from "react-router-dom";
import google from "../images/google.png";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Signup() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;


    const [name, setName] = useState(false);
    const [showCurrency, setShowCurrency] = useState(false);


    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    function handleNameChange(e) {
        const value = e.target.value;
        setNameValue(value)
        if (value.length > 0) {
            setName(true);
        } else {
            setName(false);
        }
    }


    function handleSignup(e) {
        e.preventDefault();

        let newErrors = {};

        if (!nameValue.trim()) {
            newErrors.name = "Name is required";
        }

        if (!emailRegex.test(emailValue)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!passwordRegex.test(passwordValue)) {
            newErrors.password = "Password must be 8+ chars, 1 uppercase, 1 number, 1 special character";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate("/home");
    }

    return (
        <div>

            <div className="min-h-screen w-[300px] m-3">

                <div className="text-xl text-gray-400 uppercase font-medium pt-7 pb-2">Introduce yourself</div>

                <form onSubmit={handleSignup} className="flex flex-col">
                    <label htmlFor="signup-name" className="text-xl">Hi there! My name is</label>
                    <input type="text" name="signup-name" id="signup-name" value={nameValue} onChange={handleNameChange} className="border border-gray-300 p-3 rounded-sm" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}

                    {name ? (
                        <>
                            <label htmlFor="email" className="pt-3">Here’s my email <span className="font-bold">address:</span></label>
                            <input type="email" name="email" id="email" className="border border-gray-300 p-1 rounded-sm" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

                            <label htmlFor="password" className="pt-3">And here’s my <span className="font-bold">password:</span></label>
                            <input type="password" name="password" id="password" className="border border-gray-300 p-1 rounded-sm" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

                            <div className="border border-gray-300 bg-gray-50 p-4 flex items-center justify-between mb-6 mt-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#1CC29F] text-white flex items-center justify-center rounded-full">
                                        ✓
                                    </div>
                                    <span className="text-gray-700">Success!</span>
                                </div>

                                <span className="text-sm text-gray-500">Cloudflare</span>
                            </div>
                        </>
                    ) : null
                    }

                    {showCurrency && (
                        <>
                            <label htmlFor="usd">And here's the <span className="font-bold">currency</span> that I use:</label>

                            <select id="usd" className="border border-gray-300 p-1 w-3/4">
                                <option>USD ($)</option>
                                <option>AED (AED)</option>
                                <option>AFN (؋)</option>
                                <option>ALL (L)</option>
                                <option>AMD (֏)</option>
                                <option>ANG (ƒ)</option>
                                <option>AOA (Kz)</option>
                                <option>ARS ($)</option>
                                <option>AUD (A$)</option>
                                <option>AWG (ƒ)</option>
                                <option>AZN (₼)</option>
                                <option>BAM (KM)</option>
                                <option>BBD ($)</option>
                                <option>BDT (৳)</option>
                                <option>BGN (лв)</option>
                                <option>BHD (BD)</option>
                                <option>BIF (Fr)</option>
                                <option>BMD ($)</option>
                                <option>BND ($)</option>
                                <option>BOB (Bs.)</option>
                                <option>BRL (R$)</option>
                                <option>BSD ($)</option>
                                <option>BTN (Nu)</option>
                                <option>BWP (P)</option>
                                <option>BYN (Br)</option>
                                <option>BZD ($)</option>
                                <option>CAD (C$)</option>
                                <option>CDF (Fr)</option>
                                <option>CHF (Fr)</option>
                                <option>CLP ($)</option>
                                <option>CNY (¥)</option>
                                <option>COP ($)</option>
                                <option>CRC (₡)</option>
                                <option>CUP ($)</option>
                                <option>CVE ($)</option>
                                <option>CZK (Kč)</option>
                                <option>DJF (Fr)</option>
                                <option>DKK (kr)</option>
                                <option>DOP ($)</option>
                                <option>DZD (دج)</option>
                                <option>EGP (£)</option>
                                <option>ERN (Nfk)</option>
                                <option>ETB (Br)</option>
                                <option>EUR (€)</option>
                                <option>FJD ($)</option>
                                <option>FKP (£)</option>
                                <option>GBP (£)</option>
                                <option>GEL (₾)</option>
                                <option>GHS (₵)</option>
                                <option>GIP (£)</option>
                                <option>GMD (D)</option>
                                <option>GNF (Fr)</option>
                                <option>GTQ (Q)</option>
                                <option>GYD ($)</option>
                                <option>HKD ($)</option>
                                <option>HNL (L)</option>
                                <option>HRK (kn)</option>
                                <option>HTG (G)</option>
                                <option>HUF (Ft)</option>
                                <option>IDR (Rp)</option>
                                <option>ILS (₪)</option>
                                <option>INR (₹)</option>
                                <option>IQD (ع.د)</option>
                                <option>IRR (﷼)</option>
                                <option>ISK (kr)</option>
                                <option>JMD ($)</option>
                                <option>JOD (JD)</option>
                                <option>JPY (¥)</option>
                                <option>KES (KSh)</option>
                                <option>KGS (лв)</option>
                                <option>KHR (៛)</option>
                                <option>KMF (Fr)</option>
                                <option>KPW (₩)</option>
                                <option>KRW (₩)</option>
                                <option>KWD (KD)</option>
                                <option>KYD ($)</option>
                                <option>KZT (₸)</option>
                                <option>LAK (₭)</option>
                                <option>LBP (£)</option>
                                <option>LKR (₨)</option>
                                <option>LRD ($)</option>
                                <option>LSL (L)</option>
                                <option>LYD (LD)</option>
                                <option>MAD (MAD)</option>
                                <option>MDL (L)</option>
                                <option>MGA (Ar)</option>
                                <option>MKD (ден)</option>
                                <option>MMK (K)</option>
                                <option>MNT (₮)</option>
                                <option>MOP (P)</option>
                                <option>MRU (UM)</option>
                                <option>MUR (₨)</option>
                                <option>MVR (Rf)</option>
                                <option>MWK (MK)</option>
                                <option>MXN ($)</option>
                                <option>MYR (RM)</option>
                                <option>MZN (MT)</option>
                                <option>NAD ($)</option>
                                <option>NGN (₦)</option>
                                <option>NIO (C$)</option>
                                <option>NOK (kr)</option>
                                <option>NPR (₨)</option>
                                <option>NZD ($)</option>
                                <option>OMR (﷼)</option>
                                <option>PAB (B/.)</option>
                                <option>PEN (S/.)</option>
                                <option>PGK (K)</option>
                                <option>PHP (₱)</option>
                                <option>PKR (₨)</option>
                                <option>PLN (zł)</option>
                                <option>PYG (₲)</option>
                                <option>QAR (﷼)</option>
                                <option>RON (lei)</option>
                                <option>RSD (din)</option>
                                <option>RUB (₽)</option>
                                <option>RWF (Fr)</option>
                                <option>SAR (﷼)</option>
                                <option>SBD ($)</option>
                                <option>SCR (₨)</option>
                                <option>SDG (£)</option>
                                <option>SEK (kr)</option>
                                <option>SGD ($)</option>
                                <option>SHP (£)</option>
                                <option>SLL (Le)</option>
                                <option>SOS (Sh)</option>
                                <option>SRD ($)</option>
                                <option>STN (Db)</option>
                                <option>SVC (₡)</option>
                                <option>SYP (£S)</option>
                                <option>SZL (E)</option>
                                <option>THB (฿)</option>
                                <option>TJS (TJS)</option>
                                <option>TMT (T)</option>
                                <option>TND (DT)</option>
                                <option>TOP (T$)</option>
                                <option>TRY (TL)</option>
                                <option>TTD (TT$)</option>
                                <option>TWD (NT$)</option>
                                <option>TZS (TZS)</option>
                                <option>UAH (₴)</option>
                                <option>UGX (USh)</option>
                                <option>UYU ($)</option>
                                <option>UZS (лв)</option>
                                <option>VES (Bs.S)</option>
                                <option>VND (₫)</option>
                                <option>VUV (Vt)</option>
                                <option>WST (T)</option>
                                <option>XAF (Fr)</option>
                                <option>XCD ($)</option>
                                <option>XOF (Fr)</option>
                                <option>XPF (Fr)</option>
                                <option>YER (﷼)</option>
                                <option>ZAR (R)</option>
                                <option>ZMW (ZK)</option>
                                <option>ZWL ($)</option>
                            </select>
                        </>
                    )}

                    <br />

                    <div>
                        <div className="flex items-center">
                            <button type="submit" className="bg-orange-500 p-3 pr-4 pl-4 rounded-sm mr-3 text-white font-medium">Sign me up!</button>
                            <span className="text-gray-400 block mr-2">or</span>
                            <button type="button" className="border border-gray-400  text-gray-500 rounded-sm flex items-center justify-center text-[12px] p-1 gap-1">
                                <img src={google} alt="goolge-logo" className=" w-4 h-4" />
                                Sign in with Google
                            </button>
                        </div>
                    </div>


                    <div className="pt-2">
                        <Link to="/terms" className="text-blue-500 text-[12px]">By signing up, you accept the Splitwise Terms of Service.</Link>


                        <p className="text-gray-400 text-[12px]">
                            Don't use USD for currency?{" "}
                            <a
                                href="#"
                                className="text-blue-400"
                                onClick={(e) => {
                                    e.preventDefault();        // page reload rokta hai
                                    setShowCurrency(true);     // dropdown dikhata hai
                                }}
                            >
                                Click here
                            </a>
                        </p>

                    </div>

                </form>
            </div>

        </div >
    )
}


// write about flex, items start
// know baout value in form
// know about when to use () in function in onChnage when not to use