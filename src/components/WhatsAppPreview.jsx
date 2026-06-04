import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, MoreVertical, Send, CheckCheck } from 'lucide-react';

export default function WhatsAppPreview() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Rahul - CBIT Hyderabad",
      text: "Bro, the Day 3 Midjourney prompts are absolutely crazy! I just made a premium SaaS website header layout. Check it out.",
      time: "10:14 AM",
      color: "text-emerald-400"
    },
    {
      id: 2,
      sender: "Anila - GVP Vizag",
      text: "Exactly! I used the Day 4 sheets automation to sort my placement links database. Completed a 2-hour task in like 3 minutes. My mind is blown 🤯",
      time: "10:16 AM",
      color: "text-purple-400"
    },
    {
      id: 3,
      sender: "Suhail - JNTU Anantapur",
      text: "Is anyone working on the final showcase project? The prompt structure for v0 react components is working so smooth.",
      time: "10:19 AM",
      color: "text-amber-400"
    }
  ]);

  // Simulate incoming chat notifications occasionally
  useEffect(() => {
    const chatTimer = setInterval(() => {
      const activeCollege = ["JNTU-H", "Vasavi Engg", "KITS Warangal", "AU College of Engg", "GITAM"][Math.floor(Math.random() * 5)];
      const studentName = ["Praveen", "Sneha", "Kalyan", "Nikhil", "Divya"][Math.floor(Math.random() * 5)];
      const phrase = [
        "Just submitted my Day 5 project. Streak is safe! 🔥",
        "recruiter saw my LinkedIn post and asked for my resume! Day 6 linkedin hacks are real.",
        "Will we get the verified certificate today or tomorrow?",
        "Can someone share the prompt template for prompt chain frameworks?",
        "Completed Day 2 challenge. Megaprompts are insane! 🚀"
      ][Math.floor(Math.random() * 5)];

      const dateObj = new Date();
      const timeStr = `${dateObj.getHours() % 12 || 12}:${String(dateObj.getMinutes()).padStart(2, '0')} ${dateObj.getHours() >= 12 ? 'PM' : 'AM'}`;

      const newMessage = {
        id: messages.length + 1,
        sender: `${studentName} - ${activeCollege}`,
        text: phrase,
        time: timeStr,
        color: ["text-cyan-400", "text-pink-400", "text-teal-400", "text-orange-400"][Math.floor(Math.random() * 4)]
      };

      setMessages(prev => [...prev.slice(1), newMessage]); // Keep last 3 to fit container nicely
    }, 9000);

    return () => clearInterval(chatTimer);
  }, [messages]);

  return (
    <div className="w-full max-w-md bg-[#075E54] rounded-3xl p-1 shadow-2xl overflow-hidden border border-[#128C7E]/40 font-sans">
      {/* WhatsApp Header bar */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Group icon */}
          <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-xl font-bold shadow-md">
            🚀
          </div>
          <div>
            <h4 className="text-sm font-extrabold leading-tight">AI Cohort Challenge #4</h4>
            <p className="text-[10px] text-emerald-250 font-medium">1,432 members online</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-slate-200">
          <Video className="w-4 h-4 cursor-pointer hover:text-white" />
          <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
          <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Chat Messages Body */}
      <div 
        className="bg-[#E5DDD5] bg-opacity-[0.08] p-4 space-y-3.5 min-h-[260px] flex flex-col justify-end"
        style={{
          backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
          backgroundBlendMode: 'overlay',
          backgroundColor: '#0b141a'
        }}
      >
        {messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1f2c34] text-slate-100 rounded-2xl rounded-tl-none p-3 max-w-[85%] border border-[#2c3d48]/40 shadow-md self-start relative"
          >
            <span className={`text-[10px] font-black uppercase ${msg.color} block tracking-wide`}>
              {msg.sender}
            </span>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              {msg.text}
            </p>
            <div className="flex items-center justify-end space-x-1 mt-1 text-[8px] text-slate-400">
              <span>{msg.time}</span>
              <CheckCheck className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#1f2c34] p-2.5 flex items-center space-x-2 border-t border-[#2c3d48]/40">
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-slate-400 border border-transparent">
          Type a message...
        </div>
        <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer hover:bg-[#008f72] transition-colors shadow">
          <Send className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
