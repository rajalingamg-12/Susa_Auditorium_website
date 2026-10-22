// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import {
//   FiMessageCircle,
//   FiX,
//   FiSend,
//   FiTrash2,
//   FiChevronDown,
//   FiCalendar,
//   FiMessageSquare,
// } from "react-icons/fi";

// import "./AIChat.css";


// /* =========================================================
//    SUSA WHATSAPP CONFIGURATION
// ========================================================= */

// /*
//   IMPORTANT:
//   Replace this with the official SUSA WhatsApp number.

//   Example:
//   const SUSA_WHATSAPP_NUMBER = "919442608612";

//   Do NOT use +, spaces, brackets or hyphens.

//   Example format:
//   India:
//   91XXXXXXXXXX
// */

// const SUSA_WHATSAPP_NUMBER = "918870995373";

// const SUSA_WHATSAPP_MESSAGE =
//   "Hello SUSA Thirumal Auditorium, I would like to know more details about booking an event.";


// /* =========================================================
//    SUSA AI — FRONTEND FAQ KNOWLEDGE
// ========================================================= */

// const SUSA_KNOWLEDGE = [
//   /* -------------------------------------------------------
//      GREETING
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "hello",
//       "hi",
//       "hey",
//       "hai",
//       "good morning",
//       "good afternoon",
//       "good evening",
//     ],

//     answer:
//       "Hello! 👋 Welcome to SUSA Thirumal Auditorium. I can help you with information about our auditorium, facilities, events, parking, amenities and booking.",
//   },


//   /* -------------------------------------------------------
//      AUDITORIUM
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "auditorium",
//       "main auditorium",
//       "venue",
//       "hall",
//       "function hall",
//     ],

//     answer:
//       "SUSA Thirumal Auditorium offers an elegant event environment designed for weddings, family celebrations, receptions and corporate events.",
//   },


//   /* -------------------------------------------------------
//      WEDDING
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "wedding",
//       "marriage",
//       "wedding function",
//       "marriage function",
//     ],

//     answer:
//       "Yes. SUSA Thirumal Auditorium is suitable for weddings and wedding celebrations, with a spacious event environment and comfortable guest experience.",
//   },


//   /* -------------------------------------------------------
//      RECEPTION
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "reception",
//       "wedding reception",
//       "marriage reception",
//     ],

//     answer:
//       "Yes. The venue is suitable for wedding receptions and other special celebrations.",
//   },


//   /* -------------------------------------------------------
//      FAMILY EVENTS
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "family",
//       "family function",
//       "family celebration",
//       "birthday",
//       "celebration",
//     ],

//     answer:
//       "SUSA Thirumal Auditorium is suitable for family celebrations and special occasions, providing a comfortable environment for guests.",
//   },


//   /* -------------------------------------------------------
//      CORPORATE EVENTS
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "corporate",
//       "corporate event",
//       "business event",
//       "office event",
//       "conference",
//     ],

//     answer:
//       "Yes. SUSA Thirumal Auditorium can be used for corporate events and professional gatherings.",
//   },


//   /* -------------------------------------------------------
//      PARKING
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "parking",
//       "car parking",
//       "vehicle parking",
//       "bike parking",
//       "park",
//     ],

//     answer:
//       "SUSA Thirumal Auditorium provides convenient parking and accessibility facilities for guests.",
//   },


//   /* -------------------------------------------------------
//      AMENITIES / FACILITIES
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "amenities",
//       "facility",
//       "facilities",
//       "available",
//       "services",
//     ],

//     answer:
//       "SUSA provides facilities including the Main Auditorium, Parking & Accessibility, Guest Amenities and comfortable event spaces.",
//   },


//   /* -------------------------------------------------------
//      BRIDE ROOM
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "bride room",
//       "bridal room",
//       "bride",
//       "bridal",
//     ],

//     answer:
//       "Yes. SUSA provides a dedicated Bride Room where the bride and family members can prepare comfortably before the celebration.",
//   },


//   /* -------------------------------------------------------
//      GROOM ROOM
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "groom room",
//       "groom",
//     ],

//     answer:
//       "Yes. SUSA provides a dedicated Groom Room for comfortable preparation before the event.",
//   },


//   /* -------------------------------------------------------
//      BRIDE + GROOM
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "bride and groom",
//       "bridal and groom",
//       "preparation room",
//       "preparation rooms",
//       "getting ready",
//     ],

//     answer:
//       "SUSA provides dedicated preparation spaces for the bride, groom and their family members before the event.",
//   },


//   /* -------------------------------------------------------
//      GUEST COMFORT
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "guest",
//       "guest comfort",
//       "comfortable",
//       "guests",
//     ],

//     answer:
//       "SUSA focuses on a comfortable guest experience with convenient access, parking, amenities and an elegant event environment.",
//   },


//   /* -------------------------------------------------------
//      EVENTS
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "event",
//       "events",
//       "occasion",
//       "occasions",
//       "function",
//       "functions",
//     ],

//     answer:
//       "SUSA Thirumal Auditorium is suitable for weddings, receptions, family celebrations, corporate events and other special occasions.",
//   },


//   /* -------------------------------------------------------
//      BOOKING
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "booking",
//       "book",
//       "reserve",
//       "reservation",
//       "how to book",
//     ],

//     answer:
//       "You can start the booking process through the Booking page on this website. Select your preferred event details and submit the booking enquiry.",
//   },


//   /* -------------------------------------------------------
//      GALLERY
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "gallery",
//       "photos",
//       "photo",
//       "images",
//       "pictures",
//     ],

//     answer:
//       "You can explore the SUSA venue, auditorium, wedding, family celebration and reception images on the Gallery page.",
//   },


//   /* -------------------------------------------------------
//      FACILITIES PAGE
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "facilities page",
//       "facility page",
//     ],

//     answer:
//       "You can explore detailed information about SUSA facilities through the Facilities section, including the Main Auditorium, Parking & Accessibility and Amenities.",
//   },


//   /* -------------------------------------------------------
//      LOCATION
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "location",
//       "where",
//       "address",
//       "located",
//       "location of auditorium",
//     ],

//     answer:
//       "Please use the location information provided on the SUSA website or contact the auditorium directly for the exact venue location and directions.",
//   },


//   /* -------------------------------------------------------
//      CONTACT
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "contact",
//       "phone",
//       "telephone",
//       "call",
//       "contact number",
//     ],

//     answer:
//       "For contact details, please use the contact information provided on the SUSA website.",
//   },


//   /* -------------------------------------------------------
//      THANK YOU
//   ------------------------------------------------------- */

//   {
//     keywords: [
//       "thank",
//       "thanks",
//       "thank you",
//     ],

//     answer:
//       "You're welcome! 😊 I'm happy to help with SUSA Thirumal Auditorium information.",
//   },
// ];


// /* =========================================================
//    SUGGESTED QUESTIONS
// ========================================================= */

// const SUGGESTED_QUESTIONS = [
//   "What facilities are available?",
//   "Is parking available?",
//   "Tell me about the auditorium",
//   "Can I conduct a wedding?",
//   "Do you have a bride room?",
//   "Do you have a groom room?",
//   "How can I book the auditorium?",
// ];


// /* =========================================================
//    NORMALIZE TEXT
// ========================================================= */

// const normalizeText = (text) => {
//   return text
//     .toLowerCase()
//     .replace(/[^\w\s]/gi, " ")
//     .replace(/\s+/g, " ")
//     .trim();
// };


// /* =========================================================
//    GET AI ANSWER
// ========================================================= */

// const getAnswer = (question) => {
//   const normalizedQuestion = normalizeText(question);

//   if (!normalizedQuestion) {
//     return "Please type a question so I can help you.";
//   }

//   let bestMatch = null;
//   let bestScore = 0;

//   SUSA_KNOWLEDGE.forEach((item) => {
//     let score = 0;

//     item.keywords.forEach((keyword) => {
//       const normalizedKeyword = normalizeText(keyword);

//       if (normalizedQuestion.includes(normalizedKeyword)) {
//         score += normalizedKeyword.split(" ").length;
//       }
//     });

//     if (score > bestScore) {
//       bestScore = score;
//       bestMatch = item;
//     }
//   });

//   if (bestMatch) {
//     return bestMatch.answer;
//   }

//   return (
//     "I'm SUSA AI Assistant. I can help with questions about " +
//     "SUSA Thirumal Auditorium, including the auditorium, facilities, " +
//     "parking, amenities, events, preparation rooms, gallery and booking."
//   );
// };


// /* =========================================================
//    AI CHAT COMPONENT
// ========================================================= */

// function AIChat() {

//   /* -------------------------------------------------------
//      CHAT OPEN / CLOSE
//   ------------------------------------------------------- */

//   const [isOpen, setIsOpen] = useState(false);


//   /* -------------------------------------------------------
//      CHAT MESSAGES
//   ------------------------------------------------------- */

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: "bot",
//       text:
//         "Hello! 👋 I'm the SUSA AI Assistant. How can I help you today?",
//     },
//   ]);


//   /* -------------------------------------------------------
//      INPUT
//   ------------------------------------------------------- */

//   const [input, setInput] = useState("");


//   /* -------------------------------------------------------
//      TYPING
//   ------------------------------------------------------- */

//   const [isTyping, setIsTyping] = useState(false);


//   /* =======================================================
//      SEND MESSAGE
//   ======================================================= */

//   const sendMessage = (messageText = input) => {

//     const text = messageText.trim();

//     if (!text || isTyping) {
//       return;
//     }


//     /* -----------------------------------------------------
//        USER MESSAGE
//     ----------------------------------------------------- */

//     const userMessage = {
//       id: Date.now(),
//       type: "user",
//       text,
//     };


//     setMessages((previous) => [
//       ...previous,
//       userMessage,
//     ]);


//     setInput("");
//     setIsTyping(true);


//     /* -----------------------------------------------------
//        BOT RESPONSE
//     ----------------------------------------------------- */

//     setTimeout(() => {

//       const botMessage = {
//         id: Date.now() + 1,
//         type: "bot",
//         text: getAnswer(text),
//       };


//       setMessages((previous) => [
//         ...previous,
//         botMessage,
//       ]);


//       setIsTyping(false);

//     }, 700);
//   };


//   /* =======================================================
//      ENTER KEY
//   ======================================================= */

//   const handleKeyDown = (event) => {

//     if (
//       event.key === "Enter" &&
//       !event.shiftKey
//     ) {

//       event.preventDefault();

//       sendMessage();
//     }
//   };


//   /* =======================================================
//      SUGGESTED QUESTION
//   ======================================================= */

//   const handleSuggestedQuestion = (question) => {
//     sendMessage(question);
//   };


//   /* =======================================================
//      CLEAR CHAT
//   ======================================================= */

//   const clearChat = () => {

//     setMessages([
//       {
//         id: Date.now(),
//         type: "bot",
//         text:
//           "Chat cleared. 👋 How can I help you with SUSA Thirumal Auditorium?",
//       },
//     ]);

//     setInput("");
//   };


//   /* =======================================================
//      WHATSAPP
//   ======================================================= */

//   const openWhatsApp = () => {

//     if (
//       !SUSA_WHATSAPP_NUMBER ||
//       SUSA_WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER"
//     ) {

//       alert(
//         "Please add the official SUSA WhatsApp number in AIChat.jsx"
//       );

//       return;
//     }


//     const whatsappURL =
//       `https://wa.me/${SUSA_WHATSAPP_NUMBER}` +
//       `?text=${encodeURIComponent(SUSA_WHATSAPP_MESSAGE)}`;


//     window.open(
//       whatsappURL,
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };


//   /* =======================================================
//      COMPONENT
//   ======================================================= */

//   return (
//     <div className="susa-ai-chat">


//       {/* =====================================================
//           CHAT WINDOW
//       ===================================================== */}

//       {isOpen && (

//         <div className="susa-ai-chat-window">


//           {/* =================================================
//               HEADER
//           ================================================= */}

//           <div className="susa-ai-chat-header">

//             <div className="susa-ai-chat-header-info">

//               <div className="susa-ai-chat-avatar">
//                 S
//               </div>


//               <div>

//                 <h3>
//                   SUSA AI Assistant
//                 </h3>


//                 <span>

//                   <i></i>

//                   Online

//                 </span>

//               </div>

//             </div>


//             <div className="susa-ai-chat-header-actions">

//               {/* CLEAR */}

//               <button
//                 type="button"
//                 onClick={clearChat}
//                 aria-label="Clear chat"
//                 title="Clear chat"
//               >
//                 <FiTrash2 />
//               </button>


//               {/* CLOSE */}

//               <button
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 aria-label="Close chat"
//                 title="Close chat"
//               >
//                 <FiX />
//               </button>

//             </div>

//           </div>


//           {/* =================================================
//               INTRO
//           ================================================= */}

//           <div className="susa-ai-chat-intro">

//             <span className="susa-ai-chat-intro-label">
//               SUSA THIRUMAL AUDITORIUM
//             </span>


//             <h4>
//               How can I help
//               <span> you?</span>
//             </h4>


//             <p>
//               Ask me about our auditorium, facilities,
//               events, parking, amenities or booking.
//             </p>

//           </div>


//           {/* =================================================
//               QUICK ACTIONS
//           ================================================= */}

//           <div className="susa-ai-quick-actions">


//             {/* -------------------------------------------------
//                 BOOK EVENT
//             ------------------------------------------------- */}

//             <Link
//               to="/booking"
//               className="susa-ai-action-book"
//               onClick={() => setIsOpen(false)}
//             >

//               <span className="susa-ai-action-icon">
//                 <FiCalendar />
//               </span>


//               <span className="susa-ai-action-content">

//                 <strong>
//                   Book an Event
//                 </strong>

//                 <small>
//                   Start your booking enquiry
//                 </small>

//               </span>


//               <span className="susa-ai-action-arrow">
//                 →
//               </span>

//             </Link>


//             {/* -------------------------------------------------
//                 WHATSAPP
//             ------------------------------------------------- */}

//             <button
//               type="button"
//               className="susa-ai-action-whatsapp"
//               onClick={openWhatsApp}
//             >

//               <span className="susa-ai-action-icon">
//                 <FiMessageSquare />
//               </span>


//               <span className="susa-ai-action-content">

//                 <strong>
//                   WhatsApp Us
//                 </strong>

//                 <small>
//                   For further details & enquiries
//                 </small>

//               </span>


//               <span className="susa-ai-action-arrow">
//                 →
//               </span>

//             </button>

//           </div>


//           {/* =================================================
//               MESSAGES
//           ================================================= */}

//           <div className="susa-ai-chat-messages">

//             {messages.map((message) => (

//               <div
//                 key={message.id}
//                 className={`susa-ai-chat-message ${
//                   message.type === "user"
//                     ? "susa-ai-chat-message-user"
//                     : "susa-ai-chat-message-bot"
//                 }`}
//               >

//                 {message.type === "bot" && (

//                   <div className="susa-ai-message-avatar">
//                     S
//                   </div>

//                 )}


//                 <div className="susa-ai-message-bubble">
//                   {message.text}
//                 </div>

//               </div>

//             ))}


//             {/* -------------------------------------------------
//                 TYPING INDICATOR
//             ------------------------------------------------- */}

//             {isTyping && (

//               <div className="susa-ai-chat-message susa-ai-chat-message-bot">

//                 <div className="susa-ai-message-avatar">
//                   S
//                 </div>


//                 <div className="susa-ai-typing">

//                   <span></span>
//                   <span></span>
//                   <span></span>

//                 </div>

//               </div>

//             )}

//           </div>


//           {/* =================================================
//               SUGGESTED QUESTIONS
//           ================================================= */}

//           {messages.length <= 1 && (

//             <div className="susa-ai-suggestions">

//               <span>
//                 Popular questions
//               </span>


//               <div className="susa-ai-suggestion-list">

//                 {SUGGESTED_QUESTIONS.map((question) => (

//                   <button
//                     key={question}
//                     type="button"
//                     onClick={() =>
//                       handleSuggestedQuestion(question)
//                     }
//                   >
//                     {question}
//                   </button>

//                 ))}

//               </div>

//             </div>

//           )}


//           {/* =================================================
//               INPUT
//           ================================================= */}

//           <div className="susa-ai-chat-input-area">

//             <div className="susa-ai-chat-input-wrapper">

//               <input
//                 type="text"
//                 value={input}
//                 onChange={(event) =>
//                   setInput(event.target.value)
//                 }
//                 onKeyDown={handleKeyDown}
//                 placeholder="Ask about SUSA..."
//                 aria-label="Ask SUSA AI"
//               />


//               <button
//                 type="button"
//                 onClick={() => sendMessage()}
//                 disabled={
//                   !input.trim() ||
//                   isTyping
//                 }
//                 aria-label="Send message"
//               >
//                 <FiSend />
//               </button>

//             </div>


//             <p>
//               SUSA AI provides venue information only.
//             </p>

//           </div>

//         </div>

//       )}


//       {/* =====================================================
//           FLOATING CHAT BUTTON
//       ===================================================== */}

//       <button
//         type="button"
//         className={`susa-ai-chat-button ${
//           isOpen
//             ? "susa-ai-chat-button-open"
//             : ""
//         }`}
//         onClick={() =>
//           setIsOpen((previous) => !previous)
//         }
//         aria-label={
//           isOpen
//             ? "Close SUSA AI"
//             : "Open SUSA AI"
//         }
//         title={
//           isOpen
//             ? "Close SUSA AI"
//             : "Ask SUSA AI"
//         }
//       >

//         {isOpen ? (
//           <FiChevronDown />
//         ) : (
//           <FiMessageCircle />
//         )}


//         {!isOpen && (

//           <span className="susa-ai-chat-button-pulse"></span>

//         )}

//       </button>

//     </div>
//   );
// }


// export default AIChat;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./AIChatN.css";

const SUSA_WHATSAPP_NUMBER = "918870995373";

const SUSA_WHATSAPP_MESSAGE =
  "Hello SUSA Thirumal Auditorium, I would like to know more details about booking an event.";

function AIChat() {
  const openWhatsApp = () => {
    const whatsappURL =
      `https://wa.me/${SUSA_WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(SUSA_WHATSAPP_MESSAGE)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className="susa-whatsapp-button"
      onClick={openWhatsApp}
      aria-label="Chat with SUSA Thirumal Auditorium on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="susa-whatsapp-pulse"></span>

      <FaWhatsapp className="susa-whatsapp-icon" />

      <span className="susa-whatsapp-tooltip">
        Chat with us on WhatsApp
      </span>
    </button>
  );
}

export default AIChat;