'use client'
import { useState, useEffect } from "react";
import { useRef } from "react";
//redirect client compnent impor t
import { useRouter } from "next/navigation";

export default function VerificationDigits({ email }) {
  const router = useRouter();
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const [getcurrentfield, setGetCurrentField] = useState(0);
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');
  const [digit5, setDigit5] = useState('');
  const [digit6, setDigit6] = useState('');

  const [showerrormessage, setShowErrorMessage] = useState(false);
  const [switchscreensonsuccessshow, setSwitchScreenOnSuccessShow] = useState(false);
  /*  const switchgetfield(idx) => {
 
   } */
  useEffect(() => {

    inputRefs[0].current.focus();
  }, []);

  useEffect(() => {
    if (digit6.length === 1) {
      ///check the others are complete
      if (digit1.length === 1 && digit2.length === 1 && digit3.length === 1 && digit4.length === 1 && digit5.length === 1) {
        //cOncatenate numbers to string;
        let alldigits = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
        let alldigitsString = alldigits.toString();
        whenCompleteVerify(alldigitsString);

      }

      //console.log('all digits', digit1, digit2, digit3, digit4, digit5, digit6);
    }

  }, [digit1, digit2, digit3, digit4, digit5, digit6]);

  //===============================================
  function handlePaste(e, idx, mode) {
    //alert('pasted');
    console.log(e, 'e');
    e.preventDefault();
    // optional, only if you want to control the paste

    let pastedData = e.clipboardData.getData('text/plain');

    const { name } = e.target;

    console.log('Pasted:', pastedData);
    if (isNaN(pastedData)) {
      e.preventDefault();
      return;
    }

    let pasteddatalength = pastedData.length;
    //. THIS IS IF USER TRIES TO ADD ONE VALUE TO AN EMPTY FIELD
    if (pasteddatalength === 1) {
      let value = pastedData;
      switch (name) {
        case "firstdigit":
          inputRefs[idx].current.value = value;
          setDigit1(value);
          break;
        case "seconddigit":
          inputRefs[idx].current.value = value;
          setDigit2(value);
          break;
        case "thirddigit":
          inputRefs[idx].current.value = value;
          setDigit3(value);
          break;
        case "fourthdigit":
          inputRefs[idx].current.value = value;
          setDigit4(value);
          break;
        case "fifthdigit":
          inputRefs[idx].current.value = value;
          setDigit5(value);
          break;
        case "sixthdigit":
          inputRefs[idx].current.value = value;
          setDigit6(value);
          break;
        default:
          break;
      }
      if (value && idx < 5) {
        inputRefs[idx + 1].current.focus();
      }
    }

    //. THIS IS IF USER TRIES TO ADD ANOTHER NUMBER TO AN EXISTING INPUT (after has added initial value)
    if (pasteddatalength > 1) {
      //alert('mulla');
      //take first six vlaues 
      const values1 = pastedData.split('');

      //keep only first 6
      //get current field
      //if im on 0 field , dont matter
      //if im on fied 1 : do only NOT 0, but

      // const values = values1.slice(0, 6)
      let values = values1.slice(0, 6)
      const lengthvalues = values.length;

      //    let currentfield = getcurrentfield;
      //   let slicewewant = 5 - currentfield;
      //WE WANNA SLICE THE TOTALS MINUS THE CURRENT FIELD, IF IT EXCEEDS 
      let totalfields = 6;
      let currentfield = getcurrentfield;
      let slicethis
      console.log('currentfield', currentfield);
      let lengthofpastedvalues = values.length;
      console.log('lengthofpastedvalues', lengthofpastedvalues);
      let slicewewant;
      if (lengthofpastedvalues > totalfields) {
        slicewewant = totalfields - currentfield;
        console.log('slicewewant', slicewewant);
        let slicethis = values.slice(0, slicewewant);
        console.log(slicethis, 'slicethis');
      }
      else {
        slicethis = values;
      }

      let wheretofocus;
      //if e.g. we are on 0 field - we past 2 - we want to be on 2nd field
      //if we are on 1 field - we past 2 - we want to be on 3rd field
      //so for now it's current field + total length
      //*however if we are on say 2nd field, and we past 5 (exceeds)
      //if current field + length of pasted values > 5  -> then focus should be onthe 5th field
      //what other cases : if

      if (currentfield + lengthofpastedvalues > 6) {
        wheretofocus = 5; //focus onthe last field
      }
      else if (currentfield + lengthofpastedvalues == 6) {
        wheretofocus = 5; //focus onthe last field
      }
      //ALSO, WHAT IF WE ARE ON THE 4TH FIELD AND WE PASTE 3
      //IF CURRENT FIE;D + LENGTH OF PASTED VALUES > 6 // THEN LAST FIELD 
      else {
        wheretofocus = currentfield + lengthofpastedvalues;
      }
      //but if matches the last one - WE WANT TO FOCUS ON THE LAST FIELD



      values = slicethis;
      console.log(values, 'values111');


      let maxidx = 5;
      console.log(idx, 'idx')
      let idx0
      let idx1;
      let idx2;
      let idx3;
      let idx4;
      let idx5;
      if (idx === 0) {
        idx0 = 0
        idx1 = 1
        idx2 = 2
        idx3 = 3
        idx4 = 4
        idx5 = 5

      }
      else if (idx === 1) {
        idx0 = null;
        idx1 = 1
        idx2 = 2
        idx3 = 3
        idx4 = 4
        idx5 = 5
      }
      else if (idx === 2) {
        idx0 = null
        idx1 = null;
        idx2 = 2
        idx3 = 3
        idx4 = 4
        idx5 = 5
      }
      else if (idx === 3) {
        idx0 = null
        idx1 = null;
        idx2 = null;
        idx3 = 3
        idx4 = 4
        idx5 = 5
      }
      else if (idx === 4) {
        idx0 = null
        idx1 = null;
        idx2 = null;
        idx3 = null;
        idx4 = 4
        idx5 = 5
      }
      else if (idx === 5) {
        idx0 = null
        idx1 = null;
        idx2 = null;
        idx3 = null;
        idx4 = null;
        idx5 = 5;
      }
      //IF CURRENT FIELD IS SAY THE THIRD 
      //THEN ON THAT FIELD WE PUT THE FIRST VALUE
      //WE PUT THE VALUE + POSITION
      console.log(values[0], 'values[0]');
      console.log(values[1], 'values[1]');
      console.log(values[2], 'values[2]');
      console.log(values[3], 'values[3]');
      console.log(values[4], 'values[4]');

      console.log(values[5], 'values[5]');


      console.log('idxes', idx0, idx1, idx2, idx3, idx4, idx5);
      //if eg however only 2, and we are in 3rd field (so 4th field)
      console.log(values, 'values');
      //could do if else but a lot of repetition
      if (idx0 !== null) {
        setDigit1(values[0 - currentfield] || '');
        console.log(values[0 - currentfield], 'values[0]');
        inputRefs[idx0].current.value = values[0 - currentfield] || '';
      }
      if (idx1 !== null) {
        setDigit2(values[1 - currentfield] || '');

        inputRefs[idx1].current.value = values[1 - currentfield] || '';
      }
      if (idx2 !== null) {
        setDigit3(values[2 - currentfield] || '');
        inputRefs[idx2].current.value = values[2 - currentfield] || '';
      }
      if (idx3 !== null) {
        setDigit4(values[3 - currentfield] || '');
        inputRefs[idx3].current.value = values[3 - currentfield] || '';
      }
      if (idx4 !== null) {
        setDigit5(values[4 - currentfield] || '');
        inputRefs[idx4].current.value = values[4 - currentfield] || '';
      }
      if (idx5 !== null) {
        setDigit6(values[5 - currentfield] || '');
        inputRefs[idx5].current.value = values[5 - currentfield] || '';
      }
      //alternative - pastes eveyrhting from beginning every time
      // inputRefs[0].current.value = values[0] || '';
      /*  if (values.length <= 5) {
         inputRefs[pastedData.length].current.focus();
       }
  */

      inputRefs[wheretofocus].current.focus();

      // const trimmedValue = value.slice(1, 2);
      // console.log(trimmedValue, 'trimmedValue');

    }

  }

  //. ================================================
  const Keyboardpress = (e, idx) => {

    const { name } = e.target;
    const key = e.key;
    let value = e.target.value;
    console.log(key, 'key');
    console.log(value, 'value');
    console.log(name, 'name');
    const isCtrlV = e.ctrlKey && key === 'v';

    /*    if (isCtrlV) {
        console.log('value123,', value);
        handlePaste(e, idx);
      }
   */
    if (e.key === 'Backspace') {
      e.preventDefault();
      Backspace(idx, value);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();

      Arrowleft(idx);
    }
    else if (e.key === 'ArrowRight') {
      e.preventDefault();

      Arrowright(idx);
    }
    if (isNaN(key) && !isCtrlV) {
      e.preventDefault();
      return;
    }
    if (!isNaN(key)) {
      e.preventDefault();
    }


    console.log('keyboard pressed');


    console.log(key, 'key');
    handlechangeorkeydown(name, key, idx);
    //console.log(value, 'value1');
    console.log(name, 'name');
    console.log(idx, 'idx');
    /*    const len = value.length;
       e.target.setSelectionRange(len, len); */

  }
  //. ================================================
  function handlechangeorkeydown(name, value, idx) {
    console.log(value, 'valuea');
    console.log(name, 'name');
    console.log(idx, 'idx');

    /*  
        const len = value.length;
        e.target.setSelectionRange(len, len);
     */
    //check if numberic
    if (isNaN(value)) {
      return;
    }


    //. THIS IS IF USER TRIES TO ADD ONE VALUE TO AN EMPTY FIELD
    else if (value.length === 1) {
      switch (name) {
        case "firstdigit":
          inputRefs[idx].current.value = value;
          setDigit1(value);
          break;
        case "seconddigit":
          inputRefs[idx].current.value = value;
          setDigit2(value);
          break;
        case "thirddigit":
          inputRefs[idx].current.value = value;
          setDigit3(value);
          break;
        case "fourthdigit":
          inputRefs[idx].current.value = value;
          setDigit4(value);
          break;
        case "fifthdigit":
          inputRefs[idx].current.value = value;
          setDigit5(value);
          break;
        case "sixthdigit":
          inputRefs[idx].current.value = value;
          setDigit6(value);
          break;
        default:
          break;
      }
      if (value && idx < 5) {
        inputRefs[idx + 1].current.focus();
      }
    }

    //. THIS IS IF USER TRIES TO ADD ANOTHER NUMBER TO AN EXISTING INPUT (after has added initial value)
    if (value.length > 1) {
      const trimmedValue = value.slice(1, 2);
      console.log(trimmedValue, 'trimmedValue');

      if (name === 'firstdigit') {
        setDigit1(trimmedValue);
        inputRefs[idx].current.value = trimmedValue;
        if (value && idx < 5) {
          inputRefs[idx + 1].current.focus();
        }
      }

      else if (name === 'seconddigit') {
        setDigit2(trimmedValue);
        inputRefs[idx].current.value = trimmedValue;
        if (value && idx < 5) {
          inputRefs[idx + 1].current.focus();
        }
      }
      else if (name === 'thirddigit') {
        setDigit3(trimmedValue);
        inputRefs[idx].current.value = trimmedValue;
        if (value && idx < 5) {
          inputRefs[idx + 1].current.focus();
        }
      }
      else if (name === 'fourthdigit') {
        setDigit4(trimmedValue);
        inputRefs[idx].current.value = trimmedValue;
        if (value && idx < 5) {
          inputRefs[idx + 1].current.focus();
        }
      }
      else if (name === 'fifthdigit') {
        setDigit5(trimmedValue);
        inputRefs[idx].current.value = trimmedValue;
        if (value && idx < 5) {
          inputRefs[idx + 1].current.focus();
        }
      }
      else if (name === 'sixthdigit') {
        setDigit6(trimmedValue);
        inputRefs[idx].current.value = trimmedValue;
        if (value && idx < 5) {
          inputRefs[idx + 1].current.focus();
        }
      }



      else {
        const values = e.target.value.split('');
        setDigit1(values[0]);
        setDigit2(values[1]);
        setDigit3(values[2]);
        setDigit4(values[3]);
        setDigit5(values[4]);
        setDigit6(values[5]);
        inputRefs[idx + 1].current.focus();
      }
    }


  }
  function Backspace(idx, value) {
    console.log(value, 'valuefrombackspace');
    if (idx === 0) {
      setDigit1('');
      inputRefs[0].current.value = '';
      console.log('Backspace pressed');
    }

    else if (idx > 0) {
      if (idx === 1) {
        if (value === '') {
          setDigit1('');
          inputRefs[0].current.value = '';
          inputRefs[0].current.focus();
        }
        console.log(idx, 'idx 1');
        setDigit2('');
        inputRefs[1].current.value = '';
      }
      else if (idx === 2) {
        if (value === '') {
          setDigit2('');
          inputRefs[1].current.value = '';
          inputRefs[1].current.focus();
        }
        console.log(idx, 'idx 2');
        setDigit3('');
        inputRefs[2].current.value = '';
      }
      else if (idx === 3) {
        if (value === '') {
          setDigit3('');
          inputRefs[2].current.value = '';
          inputRefs[2].current.focus();
        }
        console.log(idx, 'idx 3');
        setDigit4('');
        inputRefs[3].current.value = '';

      }
      else if (idx === 4) {
        if (value === '') {
          setDigit4('');
          inputRefs[3].current.value = '';
          inputRefs[3].current.focus();
        }
        console.log(idx, 'idx 4');
        setDigit5('');
        inputRefs[4].current.value = '';
      }
      else if (idx === 5) {
        if (value === '') {
          setDigit5('');
          inputRefs[4].current.value = '';
          inputRefs[4].current.focus();
        }
        console.log(idx, 'idx 5');
        setDigit6('');
        inputRefs[5].current.value = '';
      }

      console.log('Backspace pressed');

    }

  }

  function Arrowleft(idx) {
    console.log(idx, 'idx');
    console.log('Left arrow pressed');
    if (idx === 0) {
      console.log('idx 1');
      inputRefs[idx].current.focus();
    }
    else if (idx > 0) {
      console.log(idx - 1, 'idx-1');
      inputRefs[idx - 1].current.focus();
    }
  }

  function Arrowright(idx) {


    console.log('Right arrow pressed');
    if (idx === 6) {
      inputRefs[idx].current.focus();
    }
    else if (idx < 5) {
      inputRefs[idx + 1].current.focus();
    }
  }

  useEffect(() => {

    setTimeout(() => {
      if (switchscreensonsuccessshow) {
        //redirect to login page  
        router.push('/users/login');
      }
    }, 2000);

  }, [switchscreensonsuccessshow]);

  //! we will do fetch when complete 
  async function whenCompleteVerify(alldigitsString) {
    const response = await fetch('http://localhost:3000/users/verifyrandom6digits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        digits: alldigitsString
      }),
    });
    if (!response.ok) {
      console.log('verification failed');
      setShowErrorMessage(true);
      return;
    }
    else if (response.ok) {
      console.log('verification success');
      setShowErrorMessage(false);
      setSwitchScreenOnSuccessShow(true);
      //redirect to login page  
      // router.push('/users/login');
    }

    //show error message
    // alert('Verification failed');


  }

  const onFocusfield = (idx) => {
    setGetCurrentField(idx);
  }
  //. ================================================

  // ================================================
  return (
    <>
      <style jsx>{`
        .verifycard {
        min-width: 320px;
        max-width: 400px;
        }
        .verifinput {
          width: 50px;
          height: 50px;
          font-size: 30px;
          text-align: center;
          margin: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
        
        }
    `}</style>

      <div className="card1 verifycard">
        {switchscreensonsuccessshow && (
          <p className="text-green-500  text-center pt-5">Verification successful. Redirecting to login page.</p>
        )}
        {!switchscreensonsuccessshow && (
          <>
            <h2 className="pb-5">Verify your email address</h2>
            <p className="pb-5">We have sent a 6 digit code to  {email}. Please enter it below to verify your account.</p>

            <div className="flex flex-row justify-center items-center">
              <input className="verifinput" ref={inputRefs[0]} default="" type="text" min="1" max="9" inputMode="numeric" pattern="[0-9]*" id="firstdigit" name="firstdigit"
                //  onChange={(e) => onChangeinput(e, 0)}
                onPaste={(e) => handlePaste(e, 0)}
                //onKeyUp={(e) => handlePaste(e, 4, 'keyboardpaste')}
                onKeyDown={(e) => Keyboardpress(e, 0)}
                onFocus={() => onFocusfield(0)}
              />
              <input className="verifinput" inputMode="numeric" pattern="[0-9]*" ref={inputRefs[1]} type="text" min="1" max="9" id="  firstdigit" name="seconddigit"
                //   onChange={(e) => onChangeinput(e, 1)}
                onKeyDown={(e) => Keyboardpress(e, 1)}
                //onKeyUp={(e) => handlePaste(e, 4, 'keyboardpaste')}
                onPaste={(e) => handlePaste(e, 1)}
                onFocus={() => onFocusfield(1)}
              />
              <input className="verifinput" inputMode="numeric" pattern="[0-9]*" ref={inputRefs[2]} type="text" min="1" max="9" id="firstdigit" name="thirddigit"
                //  onChange={(e) => onChangeinput(e, 2)}
                onKeyDown={(e) => Keyboardpress(e, 2)}
                //onKeyUp={(e) => handlePaste(e, 4, 'keyboardpaste')}
                onPaste={(e) => handlePaste(e, 2)}
                onFocus={() => onFocusfield(2)}
              />
              <input className="verifinput" inputMode="numeric" pattern="[0-9]*" ref={inputRefs[3]} type="text" min="1" max="9" id="firstdigit" name="fourthdigit"
                //  onChange={(e) => onChangeinput(e, 3)}
                onKeyDown={(e) => Keyboardpress(e, 3)}
                //onKeyUp={(e) => handlePaste(e, 4, 'keyboardpaste')}
                onPaste={(e) => handlePaste(e, 3)}
                onFocus={() => onFocusfield(3)}
              />
              <input className="verifinput" inputMode="numeric" pattern="[0-9]*" ref={inputRefs[4]} type="text" min="1" max="9" id="firstdigit" name="fifthdigit"
                //  onChange={(e) => onChangeinput(e, 4)}
                onKeyDown={(e) => Keyboardpress(e, 4)}
                //onKeyUp={(e) => handlePaste(e, 4, 'keyboardpaste')}
                onPaste={(e) => handlePaste(e, 4)}
                onFocus={() => onFocusfield(4)}
              />
              <input className="verifinput" inputMode="numeric" pattern="[0-9]*" ref={inputRefs[5]} type="text" min="1" max="9" id="firstdigit" name="sixthdigit"
                //  onChange={(e) => onChangeinput(e, 5)}
                onKeyDown={(e) => Keyboardpress(e, 5)}
                // onKeyUp={(e) => handlePaste(e, 4, 'keyboardpaste')}
                onPaste={(e) => handlePaste(e, 5)}
                onFocus={() => onFocusfield(5)}
              />
            </div>


            {showerrormessage && (
              <p className="text-red-500 italic text-center pt-5">Verification failed. Please try again.</p>
            )}
          </>
        )}
      </div>
    </>
  );
}







/*   const onChangeinput = (e, idx) => {
    //BUT NOT IF BY KEYBOARD  
    console.log('input changed');
    const key = e.key;
    console.log('key', key);
    const { name, value } = e.target;
    handlechangeorkeydown(name, value, idx)
 
 
  }; */
