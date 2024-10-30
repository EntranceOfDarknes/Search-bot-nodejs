const TelegramBot = require('node-telegram-bot-api');
// const db = require('./db');
const fs = require('fs');
const { text } = require('express');
const token = '7278940652:AAGVI8rk5bfTWnlFblHGyFLKQ2P0V31lQNU';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    // const chatId = msg.chat.id;
    // const userName = msg.chat.first_name
    // bot.sendMessage(chatId, `🪷سلام ${userName} عزیز خوش اومدی🪷\n\n ⚜️لطفا کلمه مورد نظر را بفرستید: `);
    // console.log(msg);
    start(msg);
})

bot.onText(/\/guidance/, (msg) => {
    const chatId = msg.chat.id;
    const inlinekeyboard = {
        reply_markup : {
            inline_keyboard : [
                [{text : 'بازگشت' , callback_data : '/start'}]
            ]
        }
    }
    bot.sendMessage(chatId, `توجه ‼️

🤖 این ربات، یک ربات جستجوگر پیشرفته است که به شما کمک می‌کند تا به راحتی سابلیمینال‌های مورد نظر خود را پیدا کنید! اگر به دنبال سابلیمینال خاصی هستید، تنها کافی است کلمه کلیدی مرتبط با موضوع سابلیمینال خود را برای ربات ارسال کنید. 🩷

به عنوان مثال، اگر می‌خواهید سابلیمینال‌های مرتبط با 👁 چشم را پیدا کنید، کافی است کلمه "چشم" را برای ربات بفرستید.

این ربات به طور خودکار تمامی سابلیمینال‌های مرتبط با کلمه کلیدی شما را جستجو کرده و لینک‌های مربوطه را برای شما ارسال می‌کند. این فرآیند سریع و آسان است و شما می‌توانید به سرعت به محتوای مورد نظر خود دسترسی پیدا کنید.

🪷 این ربات جستجو به چنل OZHAN تعلق دارد و برای راحتی شما طراحی شده است. 🪷

لطفاً توجه داشته باشید که این ربات تنها برای جستجوی سابلیمینال‌ها طراحی شده و نمی‌تواند به سوالات دیگر پاسخ دهد. اگر سوالی دارید یا به کمک نیاز دارید، می‌توانید با ادمین چنل تماس بگیرید.

با استفاده از این ربات، تجربه‌ای سریع و کارآمد از جستجوی سابلیمینال‌ها خواهید داشت. امیدواریم که این ابزار برای شما مفید باشد! 😊`, inlinekeyboard)
})

const start = (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.chat.first_name
    bot.sendMessage(chatId, `🪷سلام ${userName} عزیز خوش اومدی🪷\n\n ⚜️لطفا کلمه مورد نظر را بفرستید: `);
    console.log(msg);
}

bot.on('callback_query', (query) => {
    const commands = query.data;
    if (commands === '/start') {
        start(query.message)
    }
})