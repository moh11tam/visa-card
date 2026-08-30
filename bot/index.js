require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const http = require('http');

const bot = new Telegraf(process.env.BOT_TOKEN);

// 🌐 خادم HTTP مصغر لإبقاء منصة Render مستقرة ومستجيبة
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('VIRTUAL VISA Bot is live and running 24/7!');
}).listen(PORT, () => {
  console.log(`📡 HTTP Server running on port ${PORT}`);
});

// 🔗 رابط المتجر الرئيسي
const WEBSITE_URL = 'https://visa-card-topaz.vercel.app'; 

// 📩 الرسالة الترحيبية المحدثة
const WELCOME_TEXT = 
`✨ *مرحبًا بك في بوابة VIRTUAL VISA الرقمية* 💳

عالمك الأول للحلول المالية والاشتراكات الترفيهية الفائقة! نتيح لك الوصول الفوري لأحدث الخدمات الرقمية بأسعار تنافسية وضمان كامل.

🔥 *أبرز العروض الحصرية المتاحة:*
🎁 *برنامج الإحالات:* ادعُ أصدقاءك واكسب بطاقة Visa بقيمة **50$** مجانًا!
🍿 *اشتراكات Netflix:* حسابات بريميوم 4K Ultra HD بأسعار مخفضة.
⚡ *عروض Flash USDT:* تحويلات سريعة بخصومات هائلة تصل إلى 80%.
💳 *بطاقات Visa & Mastercard:* للتدفع والتفعيل في جميع المواقع العالمية.
🪙 *TikTok Coins:* باقات شحن وتوفير استثنائي للعملات.

اختر قسمك المفصل من الأزرار التفاعلية أدناه 👇`;

// 🔘 لوحة الأزرار الرئيسية المحدثة
const mainKeyboard = Markup.inlineKeyboard([
  [Markup.button.url('🌐 زيارة المنصة الرسمية', WEBSITE_URL)],
  [Markup.button.callback('🎁 برنامج الإحالات والربح', 'REFERRAL_PROGRAM'), Markup.button.callback('🍿 اشتراكات Netflix 4K', 'NETFLIX')],
  [Markup.button.callback('⚡ عروض Flash USDT', 'FLASH_USDT'), Markup.button.callback('💳 البطاقات الرقمية', 'CARDS')],
  [Markup.button.callback('🪙 TikTok & الخدمات', 'SERVICES'), Markup.button.callback('💰 طرق الدفع', 'PAYMENT')],
  [Markup.button.callback('📦 كيفية الاستلام والعمل', 'HOW_IT_WORKS'), Markup.button.callback('📋 التفاصيل والضمان', 'DETAILS')],
  [Markup.button.callback('🎧 الدعم الفني المباشر', 'SUPPORT')]
]);

// 🏁 الاستجابة لأوامر البدء والترحيب
bot.start((ctx) => ctx.replyWithMarkdown(WELCOME_TEXT, mainKeyboard));
bot.hears([/hello/i, /hi/i, /هلا/i, /مرحبا/i, /السلام عليكم/i, /ستارت/i, /start/i], (ctx) => ctx.replyWithMarkdown(WELCOME_TEXT, mainKeyboard));

// 🎁 1. قسم برنامج الإحالات
bot.action('REFERRAL_PROGRAM', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `🎁 *برنامج الإحالات والمكافآت (Referral Program)*

شارِك المنصة مع أصدقائك واكسب رصيداً مجانياً بسهولة!

💵 *كيفية الربح:*
1️⃣ أدخل بريدك الإلكتروني داخل المنصة للحصول على **رابط الإحالة الخاص بك**.
2️⃣ شارك الرابط مع أصدقائك ومعارفك عبر وسائل التواصل الاجتماعي.
3️⃣ عند انضمام **10 أشخاص** عبر رابطك، ستحصل تلقائياً على **بطاقة Virtual Visa بقيمة 50$**!

⚡ *تتبع إحالاتك ورصيدك مباشرة عبر حسابك على الموقع.*`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🚀 احصل على رابط إحالتك الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🍿 2. قسم Netflix
bot.action('NETFLIX', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `🍿 *باقات اشتراكات Netflix Premium 4K*

استمتع بمشاهدة أفلامك ومسلسلاتك المفضلة بأعلى جودة **4K Ultra HD** وبدون إعلانات!

🔥 *الباقات المتوفرة:*
• **شاشة خاصة (1 Profile):** اشتراك شهر كامل لجهاز واحد مع كلمة سر خاصة بك.
• **حساب كامل (Full Account - 4 Screens):** اشتراك شهر كامل تحكم كامل بالحساب.
• **اشتراكات طويلة المدى (3 و 6 أشهر):** توفير إضافي مع ضمان كامل طوال فترة الاشتراك.

✨ *المميزات:*
• ضمان عدم الانقطاع (Full Warranty).
• جودة Ultra HD / HDR مع دعم اللغة العربية.
• تسليم وتسليم فوري فور إتمام الدفع.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🎬 اشترك في Netflix الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// ⚡ 3. قسم Flash USDT
bot.action('FLASH_USDT', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `⚡ *عروض Flash USDT الاستثنائية:*

احصل على أرصدة USDT بأقل تكلفة ممكنة مع سرعة تحويل فائقة على محافظك!

🔥 *المميزات والخصائص:*
• **أسعار تنافسية:** كميات مرتفعة بخصومات تصل حتى 80%.
• **شبكات متعددة:** دعم كامل لشبكات Tron (TRC20) وBNB Smart Chain (BEP20).
• **استلام سريع:** إرسال فوري إلى عنوان محفظتك بعد التأكيد.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🔥 احصل على Flash USDT الآن', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 💳 4. البطاقات المتوفرة
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

// 🪙 5. الخدمات الرقمية و TikTok
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

// 💰 6. طرق الدفع
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

// 📦 7. كيفية استلام الطلب
bot.action('HOW_IT_WORKS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `📦 *خطوات الطلب والاستلام:*

1️⃣ **الخيار:** حدد الخدمة أو البطاقة المطلوب شراءها من الموقع.
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

// 📋 8. معرفة التفاصيل والضمان
bot.action('DETAILS', async (ctx) => {
  await ctx.answerCbQuery();
  const text = `📋 *حول منصة VIRTUAL VISA:*

نحن منصة متخصصة في تقديم حلول الدفع الرقمي، البطاقات الافتراضية، واشتراكات الترفيه الممتازة.

✔️ بطاقات واشتراكات مقبولة وضمان كامل طوال مدة الخدمة.
✔️ سرعة تنفيذ عالية ومعالجة آمنة للبيانات.
✔️ دعم فني متواصل للرد على الاستفسارات.`;

  ctx.editMessageText(text, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.url('🌐 تصفح المنصة', WEBSITE_URL)],
      [Markup.button.callback('⬅️ القائمة الرئيسية', 'MAIN_MENU')]
    ])
  });
});

// 🎧 9. الدعم والمساعدة
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

// 🚀 تشغيل البوت
bot.launch().then(() => console.log('🚀 بوت VIRTUAL VISA يعمل بنجاح!'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));