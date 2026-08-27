require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// 🔗 رابط المتجر الرئيسي
const WEBSITE_URL = 'https://visa-card-topaz.vercel.app'; 

// 📩 نص الرسالة الترحيبية والترويجية الرئيسية
const WELCOME_TEXT = 
`🚀 *مرحبًا بك في منصة VIRTUAL VISA الرقمية* 💳

وجهتك الأولى والأسرع للحصول على البطاقات الافتراضية وعروض *Flash USDT* الحصرية بأسعار استثنائية!

🔥 *أبرز خدماتنا وعروضنا الحصرية:*
⚡ *عروض Flash USDT:* تحويلات سريعة وتخفيضات هائلة على أرصدة USDT.
💳 *بطاقات Visa & Mastercard:* مشحونة بالدولار ($) واليورو (€) للشراء والاشتراكات.
🪙 *شحن TikTok Coins:* أرصدة وباقات شحن بأسعار تنافسية.
👑 *باقات VIP الذهبية:* رصيد كبير بتكلفة مخفضة مجنونة!
🚀 *تسليم فوري ومباشر:* معالجة آمنة وسريعة لجميع طلباتك.

اختر الخدمة أو التفاصيل التي تريد استكشافها من الأزرار أدناه 👇`;

// 🔘 لوحة الأزرار الرئيسية
const mainKeyboard = Markup.inlineKeyboard([
  [Markup.button.url('🌐 زيارة الموقع الرسمي', WEBSITE_URL)],
  [Markup.button.callback('⚡ عروض Flash USDT', 'FLASH_USDT'), Markup.button.callback('💳 البطاقات الرقمية', 'CARDS')],
  [Markup.button.callback('🪙 TikTok & الخدمات', 'SERVICES'), Markup.button.callback('💰 طرق الدفع', 'PAYMENT')],
  [Markup.button.callback('📦 كيفية الاستلام والعمل', 'HOW_IT_WORKS'), Markup.button.callback('📋 التفاصيل والضمان', 'DETAILS')],
  [Markup.button.callback('🎧 الدعم الفني المباشر', 'SUPPORT')]
]);

// 🏁 الاستجابة لأوامر البدء والترحيب
bot.start((ctx) => ctx.replyWithMarkdown(WELCOME_TEXT, mainKeyboard));
bot.hears([/hello/i, /hi/i, /هلا/i, /مرحبا/i, /السلام عليكم/i, /ستارت/i, /start/i], (ctx) => ctx.replyWithMarkdown(WELCOME_TEXT, mainKeyboard));

// ⚡ 1. قسم Flash USDT (جديد ومفصل)
bot.action('FLASH_USDT', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `⚡ *عروض Flash USDT الاستثنائية:*

احصل على أرصدة USDT بأقل تكلفة ممكنة مع سرعة تحويل فائقة على محافظك!

🔥 *المميزات والخصائص:*
• **أسعار تنافسية:** كميات مرتفعة بخصومات تصل حتى 80%.
• **شبكات متعددة:** دعم كامل لشبكات Tron (TRC20) وBNB Smart Chain (BEP20).
• **استلام سريع:** إرسال فوري إلى عنوان محفظتك بعد التأكيد.

💡 *مثالي للاستخدام السريع، شحن الحسابات، والخدمات الرقمية المختلفة.*`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🔥 احصل على Flash USDT الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 💳 2. البطاقات المتوفرة
bot.action('CARDS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `💳 *البطاقات الافتراضية المتوفرة:*

بطاقات مسبقة الدفع مقبولة عالمياً لتفعيل الاشتراكات والتسوق عبر الإنترنت:

• **بطاقات Visa (USD):** أرصدة تبدأ من $10 وحتى $1,000.
• **بطاقات Mastercard (EUR):** مشحونة برصيد اليورو (€10 - €100).
• **باقة VIP Gold (€1,000):** احصل على رصيد €1,000 بسعر $500 USDT فقط!

✨ جميع البطاقات مشحونة وجاهزة للاستخدام الفوري.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🛒 شراء بطاقة الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🪙 3. الخدمات الرقمية و TikTok
bot.action('SERVICES', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `🪙 *الخدمات الرقمية وشحن Coins:*

نوفر لك أفضل الحلول الرقمية لشحن حساباتك بأسعار مخفضة:

• **TikTok Coins:** شحن عملات تيك توك وتوفير يصل إلى 80%.
• **اشتراكات وتفعيلات:** تفعيل المنصات والتطبيقات الشهيرة.
• **تحويلات سريعة:** خدمة شحن المحافظ والعملات الرقمية.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 استكشف العروض بالموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 💰 4. طرق الدفع
bot.action('PAYMENT', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `💰 *طرق الدفع المتاحة:*

نوفر عملية دفع آمنة وسلسة عبر العملات المشفرة:

• **العملات المقبولة:** USDT
• **الشبكات المدعومة:** 
  - Tron (TRC20)
  - BNB Smart Chain (BEP20)

⚡ معالجة فورية وتأكيد تلقائي للطلبات فور إرفاق إثبات الدفع (TXID).`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 الانتقال للدفع بالموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 📦 5. كيفية استلام الطلب
bot.action('HOW_IT_WORKS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `📦 *خطوات الطلب والاستلام:*

1️⃣ **الخيار:** حدد البطاقة أو عرض Flash USDT المطلوب من الموقع.
2️⃣ **البيانات:** أدخل بريدك الإلكتروني وعنوان محفظتك (في حال طلب Flash USDT).
3️⃣ **الدفع:** حوّل المبلغ المطلوب بـ USDT وأرفق رمز المعاملة (TXID) ولقطة الشاشة.
4️⃣ **التسليم:** يتم التحقق واستلام تفاصيل طلبك مباشرة على بريدك الإلكتروني!`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🚀 ابدأ الطلب الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 📋 6. معرفة التفاصيل
bot.action('DETAILS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `📋 *حول متجر VIRTUAL VISA:*

نحن منصة متخصصة في تقديم حلول الدفع الرقمي والبطاقات الافتراضية.

✔️ بطاقات مقبولة في مختلف المتواجر والخدمات.
✔️ ضمان كامل لجميع المنتجات والأرصدة.
✔️ سرعة في التنفيذ ودعم فني متواصل.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 تصفح الموقع', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🎧 7. الدعم والمساعدة
bot.action('SUPPORT', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `🎧 *مركز الدعم الفني:*

هل لديك استفسار أو تحتاج مساعدة في تنفيذ طلبك؟

📩 تواصل مباشر مع المسؤول: @moh11milano
⏱️ أوقات العمل: متواجدون لخدمتك على مدار الساعة.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('💬 مراسلة الدعم', 'https://t.me/moh11milano')],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
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
bot.launch().then(() => console.log('🚀 بوت VIRTUAL VISA يعمل بنجاح!'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));