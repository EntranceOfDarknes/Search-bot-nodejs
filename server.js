const TelegramBot = require('node-telegram-bot-api');
// const db = require('./db');
const { text } = require('express');
const fs = require('fs');
const { connected } = require('process');
const token = '7278940652:AAGVI8rk5bfTWnlFblHGyFLKQ2P0V31lQNU';

const bot = new TelegramBot(token, {polling: true});
let keyWords = ['کراش', 'عشق', 'قد', 'لاغری', 'ارزو', 'پول', 'بوستر',
     'زیبایی', 'پوست', 'مو', 'لب', 'ثروت', 'چشم', '+18', 'صورت', 'چاق',
      'بهشت', 'نمره', 'کنکور', 'بینی', 'زائد', 'DNA', 'سلامت', 'روان', 'هاله',
       'تیره', 'روشن', 'مهاجرت', 'یونیسکس', 'گلوآپ', 'سایز', 'زنانه', 'اندام',
        'لیفت', 'فرم', 'باور', 'انگیزه', 'انسداد', 'آرزو', 'رشد'
];

const channelId = '@search_bot_tg';


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
                [{text : 'بازگشت' , callback_data : '/return'}]
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
// console.log(keyWords[Math.floor(random() * 41)]);

const start = (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.chat.first_name
    const inlinekeyboard = {
        reply_markup : {
            inline_keyboard : [
                [
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'},
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'}
                ],
                [
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'},
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'}
                ]       
            ]
        }
    }
    bot.sendMessage(chatId, `🪷سلام ${userName} عزیز خوش اومدی🪷

میتونی یک کلمه کلیدی به دلخواه بنویسی یا یکی از کلمه های پرکاربرد و پیشنهادی زیر را انتخاب کنی👩🏻‍💼🧑🏻‍💼

برای دیدن کلمات بعدی ، ربات رو دوباره استارت کن❗️ `, inlinekeyboard);
    console.log(msg);
}

const Return = (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.chat.first_name
    const inlinekeyboard = {
        reply_markup : {
            inline_keyboard : [
                [
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'},
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'}
                ],
                [
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'},
                    {text : keyWords[Math.floor(Math.random() * 41)] , callback_data : '/isJoin'}
                ]       
            ]
        }
    }
    bot.sendMessage(chatId, `🪷سلام مجدد ${userName} عزیز
    میتونی یک کلمه کلیدی به دلخواه بنویسی یا یکی از کلمه های پرکاربرد و پیشنهادی زیر را انتخاب کنی👩🏻‍💼🧑🏻‍💼
        
    برای دیدن کلمات بعدی ، ربات رو دوباره استارت کن❗️`, inlinekeyboard);
}

// const isJoin = (query) => {
// //     const chatId = query.message.chat.id;
// //     const userId = query.from.id;
// //     if (query.data === 'check_membership') {
// //       bot.getChatMember(channelId, userId).then((data) => {
// //   if (data.status === 'member' || data.status === 'administrator' || data.status === 'creator') {
// //           bot.sendMessage(chatId, 'شما عضو این چنل هستید.');
// //         } else {
// //           bot.sendMessage(chatId, 'سلام! 🌟به نظر می‌رسد که شما هنوز عضو کانال ما نیستید. برای دسترسی به امکانات ربات، لطفاً ابتدا عضو کانال شوید. روی لینک زیر کلیک کنید:\n https://t.me/my_bot_test01 و به جمع ما بپیوندید: منتظرتون هستیم! 😊');
// //         }
// //       }).catch((err) => {
// //         console.error(err);
// //         bot.sendMessage(chatId, 'خطایی رخ داده. لطفاً دوباره امتحان کنید.');
// //       });
// //       bot.answerCallbackQuery(query.id, { text: 'در حال بررسی عضویت شما...' });
// //     }
// }

// bot.on('callback_query', (query) => {
//     const commands = query.data;
//     if (commands === '/return') {
//         Return(query.message)
//     } else if (commands === '/isJoin') {
//         const chatId = query.message.chat.id;
//         const userId = query.from.id;
//         if (query.data === 'check_membership') {
//             bot.getChatMember(channelId, userId).then((data) => {
//               if (data.status === 'member' || data.status === 'administrator' || data.status === 'creator') {
//                 bot.sendMessage(chatId, 'شما عضو این چنل هستید.');
//             } else {
//                 bot.sendMessage(chatId, 'سلام! 🌟به نظر می‌رسد که شما هنوز عضو کانال ما نیستید. برای دسترسی به امکانات ربات، لطفاً ابتدا عضو کانال شوید. روی لینک زیر کلیک کنید:\n https://t.me/my_bot_test01 و به جمع ما بپیوندید: منتظرتون هستیم! 😊');
//             }
//         }).catch((err) => {
//             console.error(err);
//             bot.sendMessage(chatId, 'خطایی رخ داده. لطفاً دوباره امتحان کنید.');
//         });
//         bot.answerCallbackQuery(query.id, { text: 'در حال بررسی عضویت شما...' });
//         }
//     }
// })

bot.on('callback_query', (query) => {
  const command = query.data;
  const chatId = query.message.chat.id;
  
  console.log('Received command: ', command);

  if (command === '/return') {
    Return(query.message);
  } else if (command === '/isJoin') {
    const chatId = query.message.chat.id;
    const userId = query.from.id;

    bot.getChatMember(channelId, userId).then((data) => {
      if (data.status === 'member' || data.status === 'administrator' || data.status === 'creator') {
        bot.sendMessage(chatId, 'شما عضو این چنل هستید.');
      } else {
        const inlinekeyboard = {
            reply_markup : {
                inline_keyboard : [
                    [
                        {
                            text : 'عضوشدم',
                            callback_data : '/joined'
                        }
                    ]
                ]
            }
        }
        bot.sendMessage(chatId, `
سلام! 🌟
به نظر می‌رسد که شما هنوز عضو کانال ما نیستید. برای دسترسی به امکانات ربات، لطفاً ابتدا عضو کانال شوید. روی لینک زیر کلیک کنید و به جمع ما بپیوندید:
@search_bot_tg
منتظرتون هستیم! 😊`, inlinekeyboard);
      }
    }).catch((err) => {
      console.error(err);
      bot.sendMessage(chatId, 'خطایی رخ داده. لطفاً دوباره امتحان کنید.');
    });

    bot.answerCallbackQuery(query.id, { text: 'در حال بررسی عضویت شما...' });
  }

    if (command === '/joined') {
        const chatId = query.message.chat.id;
        const userId = query.from.id;
    
        bot.getChatMember(channelId, userId).then((data) => {
          if (data.status === 'member' || data.status === 'administrator' || data.status === 'creator') {
            bot.sendMessage(chatId, `تبریک! 🎉
شما با موفقیت عضو کانال ما شدید. از این پس می‌توانید از ربات استفاده کنید💝
خوش آمدید! 🌟`);
          } else {
            const inlinekeyboard = {
                reply_markup : {
                    inline_keyboard : [
                        [
                            {
                                text : 'عضوشدم',
                                callback_data : '/joined'
                            }
                        ]
                    ]
                }
            }
            bot.sendMessage(chatId, `
    سلام! 🌟
    به نظر می‌رسد که شما هنوز عضو کانال ما نیستید. برای دسترسی به امکانات ربات، لطفاً ابتدا عضو کانال شوید. روی لینک زیر کلیک کنید و به جمع ما بپیوندید:
    @search_bot_tg
    منتظرتون هستیم! 😊`, inlinekeyboard);
          }
        }).catch((err) => {
          console.error(err);
          bot.sendMessage(chatId, 'خطایی رخ داده. لطفاً دوباره امتحان کنید.');
        });

    bot.answerCallbackQuery(query.id, { text: 'در حال بررسی عضویت شما...' });
    }

});