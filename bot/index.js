require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// 🔗 إضافة البروتوكول https:// للرابط
const WEBSITE_URL = 'https://visa-card-topaz.vercel.app'; 

// 📩 نص الرسالة الترحيبية
const WELCOME_TEXT = 
`مرحبًا بك في *VIRTUAL VISA* 💳

🌐 وجهتك الموثوقة للحصول على البطاقات الافتراضية والخدمات الرقمية بسرعة وسهولة.

💳 بطاقات Visa & Mastercard
💰 بطاقات برصيد بالدولار واليورو
🎁 عروض وباقات رقمية مميزة
🪙 خدمات الدفع والعملات الرقمية
🎮 خدمات ومنتجات للمنصات والتطبيقات الشهيرة
⚡ تسليم سريع ومعالجة سهلة للطلبات

نحن نسعى لتوفير تجربة شراء بسيطة، سريعة واحترافية، مع توضيح تفاصيل كل خدمة قبل إتمام الطلب.

اختر ما تريد معرفته من القائمة أدناه 👇`;

// 🔘 لوحة الأزرار الرئيسية
const mainKeyboard = Markup.inlineKeyboard([
  [Markup.button.url('🌐 زيارة الموقع', WEBSITE_URL)],
  [Markup.button.callback('📋 معرفة التفاصيل', 'DETAILS'), Markup.button.callback('💳 البطاقات المتوفرة', 'CARDS')],
  [Markup.button.callback('🪙 الخدمات الرقمية', 'SERVICES'), Markup.button.callback('💰 طرق الدفع', 'PAYMENT')],
  [Markup.button.callback('📦 كيفية استلام الطلب', 'HOW_IT_WORKS')],
  [Markup.button.callback('🎧 الدعم والمساعدة', 'SUPPORT')]
]);

// 🏁 الاستجابة لأوامر البدء أو الرسائل الترحيبية
bot.start((ctx) => ctx.replyWithMarkdown(WELCOME_TEXT, mainKeyboard));
bot.hears([/hello/i, /hi/i, /هلا/i, /مرحبا/i, /السلام عليكم/i, /ستارت/i], (ctx) => ctx.replyWithMarkdown(WELCOME_TEXT, mainKeyboard));

// 📋 1. معرفة التفاصيل
bot.action('DETAILS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `📋 *معرفة التفاصيل:*

تعرف على المنتجات، الأسعار، طرق الدفع وآلية الطلب.
يقدم متجرنا بطاقات رقمية افتراضية عالية الجودة ومقبولة عالمياً للشراء من الإنترنت والاشتراكات. 

نوفر تسليماً فورياً وضماناً شاملاً لكافة البطاقات والخدمات الرقمية.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 الانتقال للموقع الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ عودة للقائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 💳 2. البطاقات المتوفرة
bot.action('CARDS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `💳 *البطاقات المتوفرة:*

استعرض بطاقات Visa وMastercard والباقات المتاحة:

• بطاقة Visa افتراضية ($10 - $1,000)
• بطاقة Mastercard مشحونة بالدولار واليورو
• باقة النخبة VIP الاستثنائية

جميع البطاقات جاهزة للتفعيل والاستخدام المباشر.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🛒 استعراض الشراء بالموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ عودة للقائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🪙 3. الخدمات الرقمية
bot.action('SERVICES', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `🪙 *الخدمات الرقمية:*

اكتشف الخدمات الرقمية المتوفرة داخل المتجر:

• شحن المحافظ والعملات الرقمية (USDT)
• تفعيل اشتراكات المنصات والألعاب الشهيرة
• خدمات دفع وتحويل الأموال عبر الإنترنت`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 استكشف الخدمات بالموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ عودة للقائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 💰 4. طرق الدفع
bot.action('PAYMENT', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `💰 *طرق الدفع:*

تعرف على طرق الدفع والمحافظ المتاحة:

• العملات الرقمية المشفرة: *USDT (TRC20 / TON / BEP20)*
• معالجة فورية وتأكيد تلقائي عبر الموقع.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 الشراء عبر الموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ عودة للقائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 📦 5. كيفية استلام الطلب
bot.action('HOW_IT_WORKS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `📦 *كيفية استلام الطلب:*

تعرف على خطوات الطلب والتأكيد والتسليم:

1. اختر البطاقة أو الخدمة المطلوب شراءها من الموقع.
2. أتمم عملية الدفع بواسطة USDT.
3. يستلم النظام طلبك ويتم استخراج وتزويدك ببيانات البطاقة مباشرة!`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 اطلب الآن من الموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ عودة للقائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🎧 6. الدعم والمساعدة
bot.action('SUPPORT', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `🎧 *الدعم والمساعدة:*

تواصل معنا إذا كان لديك أي استفسار أو مشكلة:

📩 حساب الدعم الفني: @moh11milano`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.callback('⬅️ عودة للقائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🏠 العودة للقائمة الرئيسية
bot.action('MAIN_MENU', async (ctx) => {
  await ctx.answerCbQuery();
  ctx.editMessageText(WELCOME_TEXT, {
    parse_mode: 'Markdown',
    ...mainKeyboard
  });
});

// تشغيل البوت
bot.launch().then(() => console.log('🚀 بوت البوابة يعمل بنجاح!'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));