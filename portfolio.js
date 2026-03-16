// ==============================================
// PORTFOLIO.JS — Theme & Language Switcher
// ==============================================

// ── Translations ──────────────────────────────
const T = {
  en: {
    'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact','nav.cv':'Download CV',
    'footer.copy':'© 2026 Agus Miftachul Huda. All rights reserved.','footer.built':'Built with passion & precision.',
    // Home hero
    'h.tag':'Full-Stack & Mobile Developer',
    'h.sub':'Building robust apps — from web to mobile.',
    'h.desc':'Passionate developer with hands-on experience across a wide spectrum of technologies — from backend APIs and web platforms to cross-platform mobile applications. Dedicated to crafting clean, scalable, and impactful solutions.',
    'h.btn.proj':'View Projects →','h.btn.contact':'Get In Touch','h.btn.cv':'Download CV',
    'h.stat.tech':'Technologies','h.stat.proj':'Featured Projects',
    // Home about
    'h.about.tag':'01 — About','h.about.title':'Who I Am',
    'h.about.p1':"I'm <strong>Agus Miftachul Huda</strong>, a Full-Stack &amp; Mobile Developer based in Indonesia, passionate about building software that's both technically rigorous and meaningfully useful.",
    'h.about.p2':"My stack spans the full spectrum — from backend services with <strong>Python, Java, PHP &amp; Laravel</strong> to web frontends with <strong>TypeScript &amp; JavaScript</strong>, and native/cross-platform mobile apps using <strong>Flutter, Dart &amp; React Native</strong>.",
    'h.about.p3':'I also work with containerization (<strong>Docker</strong>), REST APIs, SQL databases, and CMS platforms like <strong>WordPress</strong>.',
    'h.about.btn':'Learn More About Me →',
    // Home projects
    'h.proj.tag':'02 — Projects','h.proj.title':'Featured Work',
    'h.proj.1.name':'Project One','h.proj.1.desc':'A full-featured application built with modern tools and frameworks, delivering a seamless user experience across platforms.','h.proj.1.link':'View Details →',
    'h.proj.2.name':'Project Two','h.proj.2.desc':'A cross-platform mobile application with intuitive UX, built to run natively on both Android and iOS devices.','h.proj.2.link':'View Details →',
    'h.proj.all':'See All Projects →',
    // Home contact
    'h.con.tag':'03 — Contact','h.con.title':'Get In Touch',
    'h.con.desc':"Have a project in mind, want to collaborate, or just say hello? I'd love to hear from you.",
    'h.con.gh':'GitHub','h.con.li':'LinkedIn','h.con.msg':'Send Message',
    // About page
    'a.hero.tag':'Get to Know Me','a.hero.title':'About Me',
    'a.hero.sub':'Full-Stack & Mobile Developer from Indonesia, passionate about building scalable, user-friendly applications across web and mobile platforms.',
    'a.card.role':'Full-Stack & Mobile Developer','a.card.loc':'Indonesia','a.card.avail':'Open to opportunities','a.card.tech':'13+ Technologies',
    'a.bio1.lbl':'Who I Am',
    'a.bio1.p1':"I'm <strong>Agus Miftachul Huda</strong>, a Full-Stack &amp; Mobile Developer committed to delivering software solutions that are both technically solid and meaningful to end users.",
    'a.bio1.p2':"I thrive building across the entire stack — from backend services and databases, to web frontends, to native mobile applications. My approach is <strong>pragmatic and user-focused</strong>: I build what's needed, done right, delivered clean.",
    'a.bio2.lbl':'My Approach',
    'a.bio2.p1':"Good software isn't just about code that runs — it's about code that <strong>lasts</strong>. I care deeply about clean architecture, maintainable codebases, and delivering features that genuinely solve problems.",
    'a.bio2.p2':"Whether it's a REST API backend, a Laravel web app, a Flutter mobile app, or a WordPress site — I adapt to the tools that best fit the job, not the other way around.",
    'a.bio3.lbl':'What I Build',
    'a.bio3.p1':"My stack covers <strong>Python, Java, C#, PHP &amp; Laravel</strong> on the backend; <strong>TypeScript, JavaScript</strong> on the web frontend; and <strong>Flutter/Dart &amp; React Native</strong> for cross-platform mobile.",
    'a.bio3.p2':"I also work with <strong>SQL databases, REST APIs, Docker containerization</strong>, and CMS platforms including <strong>WordPress</strong> for content-driven projects.",
    'a.skills.tag':'02 — Skills','a.skills.title':'Technical Expertise',
    'a.cat.be':'Back-End','a.cat.fe':'Web Front-End','a.cat.mob':'Mobile','a.cat.ops':'Data & DevOps',
    'a.exp.tag':'03 — Experience','a.exp.title':'Career Journey',
    'a.exp1.per':'Recent — Present','a.exp1.role':'Full-Stack & Mobile Developer','a.exp1.co':'Software Projects · Freelance',
    'a.exp1.desc':'Designing and delivering full-stack web and mobile applications for various clients. Building backend APIs, web frontends, and cross-platform mobile apps using Flutter, Laravel, and JavaScript ecosystems.',
    'a.exp2.per':'Prior Experience','a.exp2.role':'Mobile & Web Developer','a.exp2.co':'Development Projects · Full-Time',
    'a.exp2.desc':'Developed mobile applications using React Native and Flutter, integrated with RESTful backend services. Collaborated on web platforms built with PHP, Python, and JavaScript frameworks.',
    'a.exp3.per':'Foundation','a.exp3.role':'Software Developer','a.exp3.co':'Internship & Early Projects',
    'a.exp3.desc':'Built foundational skills across multiple languages and platforms. Contributed to web development projects using WordPress, PHP, and Java.',
    'a.val.tag':'04 — Values','a.val.title':'How I Work',
    'a.v1.t':'User-First','a.v1.d':'Good software solves real problems for real people. I design and build with the end user always in mind.',
    'a.v2.t':'Clean Code','a.v2.d':"Code that's easy to read, maintain, and extend is code that stands the test of time. Clarity is a feature.",
    'a.v3.t':'Continuous Learning','a.v3.d':'The tech landscape evolves constantly. I actively expand my knowledge across backend, mobile, and DevOps domains.',
    'a.v4.t':'Adaptability','a.v4.d':'From Python to Flutter to Laravel — I choose the right tool for the job and ramp up quickly on new stacks.',
    'a.cta.tag':"Let's Connect",'a.cta.title':'Ready to Build Something?',
    'a.cta.sub':"Whether you have a project in mind, want to collaborate, or simply want to connect — I'd love to hear from you.",
    'a.cta.b1':'View Projects →','a.cta.b2':'Get In Touch',
    // Project page
    'p.hero.tag':'Selected Work','p.hero.title':'Projects',
    'p.hero.sub':'A showcase of my featured projects — each one built with purpose, precision, and a commitment to quality.',
    'p.1.badge':'Featured','p.1.name':'Project One',
    'p.1.desc':'A comprehensive application built from the ground up with a scalable architecture. The backend handles complex data operations via RESTful APIs, while the frontend delivers a fast and intuitive user experience. Containerized with Docker for seamless deployment across environments.',
    'p.1.watch':'Watch Demo','p.1.code':'View Code',
    'p.2.badge':'Mobile','p.2.name':'Project Two',
    'p.2.desc':'A cross-platform mobile application built with Flutter and Dart, delivering a native-quality experience on both Android and iOS from a single codebase. Integrates seamlessly with a RESTful backend for real-time data and smooth user interactions.',
    'p.2.watch':'Watch Demo','p.2.code':'View Code',
    'p.media':'Click to play demo video',
    // Contact page
    'c.hero.tag':'Say Hello','c.hero.title':'Get In Touch',
    'c.hero.sub':"Whether you have a project in mind, want to collaborate, or simply want to connect — I'd love to hear from you.",
    'c.s.lbl':'Current Status','c.s.txt':'Open to new opportunities',
    'c.r.lbl':'About Reaching Out',
    'c.r.txt':"I'm always open to discussing <strong>new projects, creative ideas, or collaboration opportunities</strong>. Whether it's a web app, mobile project, or backend API — don't hesitate, just say hello.",
    'c.ch.lbl':'Contact Channels',
    'c.email.t':'Email','c.gh.t':'GitHub','c.li.t':'LinkedIn','c.cv.t':'Resume / CV','c.cv.v':'Download PDF',
    'c.resp.lbl':'Response Time','c.resp.txt':'I typically respond within <strong>24–48 hours</strong> on weekdays. For urgent matters, email is the fastest way to reach me.',
    'c.f.title':'Send a Message','c.f.sub':"Fill out the form and I'll get back to you as soon as possible.",
    'c.f.fn':'First Name','c.f.ln':'Last Name','c.f.email':'Email Address','c.f.subj':'Subject',
    'c.f.msg':'Message','c.f.submit':'Send Message',
    'c.f.ok.title':'Message Sent!','c.f.ok.txt':"Thank you for reaching out. I'll get back to you within 24–48 hours.",'c.f.ok.reset':'Send Another Message',
    'c.faq.tag':'FAQ','c.faq.title':'Common Questions',
    'c.q1':'Are you available for freelance or contract work?',
    'c.a1':"Yes — I'm open to freelance, contract, and full-time opportunities. Whether it's a web app, mobile project, or backend API, feel free to send me the details via the contact form or directly by email.",
    'c.q2':'What technologies do you work with?',
    'c.a2':'My stack includes Python, TypeScript, React Native, JavaScript, REST APIs, Java, C#, SQL, Docker, Dart, Flutter, WordPress, PHP, and Laravel.',
    'c.q3':'Can you build both web and mobile applications?',
    'c.a3':"Absolutely. I work across the full stack — from web platforms (Laravel, TypeScript, JavaScript) to cross-platform mobile apps (Flutter/Dart and React Native).",
    'c.q4':'How long does it take to get a response?',
    'c.a4':'I typically reply within 24–48 hours on weekdays. For urgent matters, email is the quickest channel.',
    'c.q5':'Do you work on WordPress projects?',
    'c.a5':"Yes — WordPress is part of my stack. I can build custom themes, plugins, and content-driven websites. I'm also comfortable setting up and optimizing WooCommerce stores.",
  },

  id: {
    'nav.about':'Tentang','nav.projects':'Proyek','nav.contact':'Kontak','nav.cv':'Unduh CV',
    'footer.copy':'© 2026 Agus Miftachul Huda. Seluruh hak cipta dilindungi.','footer.built':'Dibuat dengan semangat & presisi.',
    'h.tag':'Pengembang Full-Stack & Mobile',
    'h.sub':'Membangun aplikasi tangguh — dari web hingga mobile.',
    'h.desc':'Pengembang bersemangat dengan pengalaman nyata di berbagai teknologi — mulai dari backend API dan platform web hingga aplikasi mobile lintas platform. Berkomitmen membangun solusi yang bersih, skalabel, dan berdampak.',
    'h.btn.proj':'Lihat Proyek →','h.btn.contact':'Hubungi Saya','h.btn.cv':'Unduh CV',
    'h.stat.tech':'Teknologi','h.stat.proj':'Proyek Unggulan',
    'h.about.tag':'01 — Tentang','h.about.title':'Siapa Saya',
    'h.about.p1':"Saya <strong>Agus Miftachul Huda</strong>, Pengembang Full-Stack &amp; Mobile berbasis di Indonesia, bersemangat membangun perangkat lunak yang kuat secara teknis dan benar-benar bermanfaat.",
    'h.about.p2':"Stack saya mencakup spektrum penuh — dari layanan backend dengan <strong>Python, Java, PHP &amp; Laravel</strong> hingga frontend web dengan <strong>TypeScript &amp; JavaScript</strong>, serta aplikasi mobile lintas platform menggunakan <strong>Flutter, Dart &amp; React Native</strong>.",
    'h.about.p3':'Saya juga bekerja dengan kontainerisasi (<strong>Docker</strong>), REST API, database SQL, dan platform CMS seperti <strong>WordPress</strong>.',
    'h.about.btn':'Pelajari Lebih Lanjut →',
    'h.proj.tag':'02 — Proyek','h.proj.title':'Karya Unggulan',
    'h.proj.1.name':'Proyek Satu','h.proj.1.desc':'Aplikasi lengkap yang dibangun dengan alat dan framework modern, memberikan pengalaman pengguna yang mulus di berbagai platform.','h.proj.1.link':'Lihat Detail →',
    'h.proj.2.name':'Proyek Dua','h.proj.2.desc':'Aplikasi mobile lintas platform dengan UX intuitif, dibangun untuk berjalan secara native di Android dan iOS.','h.proj.2.link':'Lihat Detail →',
    'h.proj.all':'Lihat Semua Proyek →',
    'h.con.tag':'03 — Kontak','h.con.title':'Hubungi Saya',
    'h.con.desc':'Punya proyek, ingin berkolaborasi, atau sekadar menyapa? Saya dengan senang hati mendengar dari Anda.',
    'h.con.gh':'GitHub','h.con.li':'LinkedIn','h.con.msg':'Kirim Pesan',
    'a.hero.tag':'Kenali Saya','a.hero.title':'Tentang Saya',
    'a.hero.sub':'Pengembang Full-Stack & Mobile dari Indonesia, bersemangat membangun aplikasi skalabel dan ramah pengguna di platform web dan mobile.',
    'a.card.role':'Pengembang Full-Stack & Mobile','a.card.loc':'Indonesia','a.card.avail':'Terbuka untuk peluang baru','a.card.tech':'13+ Teknologi',
    'a.bio1.lbl':'Siapa Saya',
    'a.bio1.p1':"Saya <strong>Agus Miftachul Huda</strong>, Pengembang Full-Stack &amp; Mobile berkomitmen menghadirkan solusi perangkat lunak yang secara teknis solid dan bermakna bagi pengguna.",
    'a.bio1.p2':"Saya ahli membangun di seluruh stack — dari layanan backend dan database, hingga frontend web, hingga aplikasi mobile native. Pendekatan saya <strong>pragmatis dan berfokus pada pengguna</strong>.",
    'a.bio2.lbl':'Pendekatan Saya',
    'a.bio2.p1':"Perangkat lunak yang baik bukan hanya tentang kode yang berjalan — ini tentang kode yang <strong>bertahan lama</strong>. Saya sangat peduli dengan arsitektur bersih, basis kode yang mudah dipelihara, dan pengiriman fitur yang benar-benar menyelesaikan masalah.",
    'a.bio2.p2':"Baik itu backend REST API, aplikasi web Laravel, aplikasi mobile Flutter, atau situs WordPress — saya beradaptasi dengan alat yang paling cocok untuk pekerjaan tersebut.",
    'a.bio3.lbl':'Apa yang Saya Bangun',
    'a.bio3.p1':"Stack saya mencakup <strong>Python, Java, C#, PHP &amp; Laravel</strong> di backend; <strong>TypeScript, JavaScript</strong> di frontend web; dan <strong>Flutter/Dart &amp; React Native</strong> untuk mobile lintas platform.",
    'a.bio3.p2':"Saya juga bekerja dengan <strong>database SQL, REST API, kontainerisasi Docker</strong>, dan platform CMS termasuk <strong>WordPress</strong> untuk proyek berbasis konten.",
    'a.skills.tag':'02 — Keahlian','a.skills.title':'Keahlian Teknis',
    'a.cat.be':'Back-End','a.cat.fe':'Front-End Web','a.cat.mob':'Mobile','a.cat.ops':'Data & DevOps',
    'a.exp.tag':'03 — Pengalaman','a.exp.title':'Perjalanan Karir',
    'a.exp1.per':'Terkini — Sekarang','a.exp1.role':'Pengembang Full-Stack & Mobile','a.exp1.co':'Proyek Perangkat Lunak · Freelance',
    'a.exp1.desc':'Merancang dan menghadirkan aplikasi web dan mobile full-stack untuk berbagai klien. Membangun backend API, frontend web, dan aplikasi mobile lintas platform menggunakan Flutter, Laravel, dan ekosistem JavaScript.',
    'a.exp2.per':'Pengalaman Sebelumnya','a.exp2.role':'Pengembang Mobile & Web','a.exp2.co':'Proyek Pengembangan · Full-Time',
    'a.exp2.desc':'Mengembangkan aplikasi mobile menggunakan React Native dan Flutter, terintegrasi dengan layanan backend RESTful. Berkolaborasi pada platform web yang dibangun dengan PHP, Python, dan framework JavaScript.',
    'a.exp3.per':'Fondasi','a.exp3.role':'Pengembang Perangkat Lunak','a.exp3.co':'Magang & Proyek Awal',
    'a.exp3.desc':'Membangun keterampilan dasar di berbagai bahasa dan platform. Berkontribusi pada proyek pengembangan web menggunakan WordPress, PHP, dan Java.',
    'a.val.tag':'04 — Nilai','a.val.title':'Cara Saya Bekerja',
    'a.v1.t':'Mengutamakan Pengguna','a.v1.d':'Perangkat lunak yang baik menyelesaikan masalah nyata bagi orang nyata. Saya merancang dan membangun dengan selalu mengutamakan pengguna akhir.',
    'a.v2.t':'Kode Bersih','a.v2.d':'Kode yang mudah dibaca, dipelihara, dan dikembangkan adalah kode yang tahan uji waktu. Kejelasan adalah sebuah fitur.',
    'a.v3.t':'Pembelajaran Berkelanjutan','a.v3.d':'Lanskap teknologi berkembang terus. Saya aktif memperluas pengetahuan di domain backend, mobile, dan DevOps.',
    'a.v4.t':'Adaptabilitas','a.v4.d':'Dari Python hingga Flutter hingga Laravel — saya memilih alat yang tepat dan beradaptasi cepat dengan stack baru.',
    'a.cta.tag':'Mari Terhubung','a.cta.title':'Siap Membangun Sesuatu?',
    'a.cta.sub':'Apakah Anda punya proyek, ingin berkolaborasi, atau sekadar terhubung — saya sangat ingin mendengar dari Anda.',
    'a.cta.b1':'Lihat Proyek →','a.cta.b2':'Hubungi Saya',
    'p.hero.tag':'Karya Pilihan','p.hero.title':'Proyek',
    'p.hero.sub':'Showcase proyek unggulan saya — setiap proyek dibangun dengan tujuan, presisi, dan komitmen terhadap kualitas.',
    'p.1.badge':'Unggulan','p.1.name':'Proyek Satu',
    'p.1.desc':'Aplikasi komprehensif yang dibangun dari awal dengan arsitektur yang skalabel. Backend menangani operasi data kompleks melalui REST API, sementara frontend menghadirkan pengalaman pengguna yang cepat dan intuitif. Dikontainerisasi dengan Docker.',
    'p.1.watch':'Tonton Demo','p.1.code':'Lihat Kode',
    'p.2.badge':'Mobile','p.2.name':'Proyek Dua',
    'p.2.desc':'Aplikasi mobile lintas platform yang dibangun dengan Flutter dan Dart, menghadirkan pengalaman berkualitas native di Android dan iOS dari satu codebase. Terintegrasi dengan backend RESTful untuk data real-time dan interaksi pengguna yang halus.',
    'p.2.watch':'Tonton Demo','p.2.code':'Lihat Kode',
    'p.media':'Klik untuk memutar video demo',
    'c.hero.tag':'Sapa Saya','c.hero.title':'Hubungi Saya',
    'c.hero.sub':'Apakah Anda punya proyek, ingin berkolaborasi, atau sekadar ingin terhubung — saya dengan senang hati mendengar dari Anda.',
    'c.s.lbl':'Status Saat Ini','c.s.txt':'Terbuka untuk peluang baru',
    'c.r.lbl':'Tentang Menghubungi',
    'c.r.txt':"Saya selalu terbuka untuk mendiskusikan <strong>proyek baru, ide kreatif, atau peluang kolaborasi</strong>. Baik itu aplikasi web, proyek mobile, atau backend API — jangan ragu, sapa saja.",
    'c.ch.lbl':'Saluran Kontak',
    'c.email.t':'Email','c.gh.t':'GitHub','c.li.t':'LinkedIn','c.cv.t':'Resume / CV','c.cv.v':'Unduh PDF',
    'c.resp.lbl':'Waktu Respons','c.resp.txt':'Saya biasanya membalas dalam <strong>24–48 jam</strong> pada hari kerja. Untuk hal mendesak, email adalah cara tercepat menghubungi saya.',
    'c.f.title':'Kirim Pesan','c.f.sub':'Isi formulir dan saya akan segera merespons.',
    'c.f.fn':'Nama Depan','c.f.ln':'Nama Belakang','c.f.email':'Alamat Email','c.f.subj':'Subjek',
    'c.f.msg':'Pesan','c.f.submit':'Kirim Pesan',
    'c.f.ok.title':'Pesan Terkirim!','c.f.ok.txt':'Terima kasih telah menghubungi saya. Saya akan membalas dalam 24–48 jam.','c.f.ok.reset':'Kirim Pesan Lain',
    'c.faq.tag':'FAQ','c.faq.title':'Pertanyaan Umum',
    'c.q1':'Apakah Anda tersedia untuk pekerjaan freelance atau kontrak?',
    'c.a1':'Ya — saya terbuka untuk peluang freelance, kontrak, dan full-time. Baik aplikasi web, proyek mobile, atau backend API, kirimkan detailnya melalui formulir kontak atau langsung via email.',
    'c.q2':'Teknologi apa yang Anda gunakan?',
    'c.a2':'Stack saya mencakup Python, TypeScript, React Native, JavaScript, REST API, Java, C#, SQL, Docker, Dart, Flutter, WordPress, PHP, dan Laravel.',
    'c.q3':'Bisakah Anda membangun aplikasi web dan mobile?',
    'c.a3':'Tentu saja. Saya bekerja di seluruh stack — dari platform web (Laravel, TypeScript, JavaScript) hingga aplikasi mobile lintas platform (Flutter/Dart dan React Native).',
    'c.q4':'Berapa lama waktu yang dibutuhkan untuk mendapat respons?',
    'c.a4':'Saya biasanya membalas dalam 24–48 jam pada hari kerja. Untuk hal mendesak, email adalah saluran tercepat.',
    'c.q5':'Apakah Anda mengerjakan proyek WordPress?',
    'c.a5':'Ya — WordPress adalah bagian dari stack saya. Saya bisa membangun tema, plugin khusus, dan situs web berbasis konten. Saya juga nyaman menyiapkan toko WooCommerce.',
  },

  zh: {
    'nav.about':'关于','nav.projects':'项目','nav.contact':'联系','nav.cv':'下载简历',
    'footer.copy':'© 2026 Agus Miftachul Huda. 版权所有。','footer.built':'用热情与精准构建。',
    'h.tag':'全栈与移动开发者',
    'h.sub':'构建强大应用 — 从网页到移动端。',
    'h.desc':'充满热情的开发者，拥有跨技术栈的实战经验 — 从后端API和网页平台到跨平台移动应用。致力于打造简洁、可扩展且有影响力的解决方案。',
    'h.btn.proj':'查看项目 →','h.btn.contact':'联系我','h.btn.cv':'下载简历',
    'h.stat.tech':'技术栈','h.stat.proj':'精选项目',
    'h.about.tag':'01 — 关于','h.about.title':'我是谁',
    'h.about.p1':"我是 <strong>Agus Miftachul Huda</strong>，一名来自印度尼西亚的全栈与移动开发者，热衷于构建既技术严谨又真正有用的软件。",
    'h.about.p2':"我的技术栈覆盖全谱 — 从 <strong>Python、Java、PHP 与 Laravel</strong> 后端服务，到 <strong>TypeScript 与 JavaScript</strong> 网页前端，以及使用 <strong>Flutter、Dart 与 React Native</strong> 的跨平台移动应用。",
    'h.about.p3':'我还使用容器化技术（<strong>Docker</strong>）、REST API、SQL 数据库以及 <strong>WordPress</strong> 等 CMS 平台。',
    'h.about.btn':'了解更多 →',
    'h.proj.tag':'02 — 项目','h.proj.title':'精选作品',
    'h.proj.1.name':'项目一','h.proj.1.desc':'使用现代工具和框架构建的全功能应用，在各平台上提供流畅的用户体验。','h.proj.1.link':'查看详情 →',
    'h.proj.2.name':'项目二','h.proj.2.desc':'具有直观用户体验的跨平台移动应用，可在 Android 和 iOS 设备上原生运行。','h.proj.2.link':'查看详情 →',
    'h.proj.all':'查看所有项目 →',
    'h.con.tag':'03 — 联系','h.con.title':'联系我',
    'h.con.desc':'有项目想法、想要合作或只是打个招呼？欢迎通过以下任何渠道联系我。',
    'h.con.gh':'GitHub','h.con.li':'LinkedIn','h.con.msg':'发送消息',
    'a.hero.tag':'了解我','a.hero.title':'关于我',
    'a.hero.sub':'来自印度尼西亚的全栈与移动开发者，热衷于在网页和移动平台上构建可扩展的用户友好型应用。',
    'a.card.role':'全栈与移动开发者','a.card.loc':'印度尼西亚','a.card.avail':'开放机会','a.card.tech':'13+ 项技术',
    'a.bio1.lbl':'我是谁',
    'a.bio1.p1':"我是 <strong>Agus Miftachul Huda</strong>，一名全栈与移动开发者，致力于提供技术扎实且对用户有意义的软件解决方案。",
    'a.bio1.p2':"我擅长构建整个技术栈 — 从后端服务和数据库，到网页前端，再到原生移动应用。我的方式<strong>务实且以用户为中心</strong>。",
    'a.bio2.lbl':'我的方法',
    'a.bio2.p1':"好的软件不只是能运行的代码 — 而是<strong>经久耐用</strong>的代码。我非常重视干净的架构、可维护的代码库，以及真正解决问题的功能交付。",
    'a.bio2.p2':"无论是 REST API 后端、Laravel 网页应用、Flutter 移动应用还是 WordPress 网站 — 我会适应最适合工作的工具。",
    'a.bio3.lbl':'我构建什么',
    'a.bio3.p1':"我的技术栈涵盖后端的 <strong>Python、Java、C#、PHP 与 Laravel</strong>；网页前端的 <strong>TypeScript、JavaScript</strong>；以及跨平台移动端的 <strong>Flutter/Dart 与 React Native</strong>。",
    'a.bio3.p2':"我还使用 <strong>SQL 数据库、REST API、Docker 容器化</strong>，以及 <strong>WordPress</strong> 等内容驱动项目的 CMS 平台。",
    'a.skills.tag':'02 — 技能','a.skills.title':'技术专长',
    'a.cat.be':'后端','a.cat.fe':'网页前端','a.cat.mob':'移动端','a.cat.ops':'数据与运维',
    'a.exp.tag':'03 — 经验','a.exp.title':'职业历程',
    'a.exp1.per':'近期 — 至今','a.exp1.role':'全栈与移动开发者','a.exp1.co':'软件项目 · 自由职业',
    'a.exp1.desc':'为各类客户设计并交付全栈网页和移动应用。使用 Flutter、Laravel 和 JavaScript 生态系统构建后端 API、网页前端和跨平台移动应用。',
    'a.exp2.per':'此前经验','a.exp2.role':'移动与网页开发者','a.exp2.co':'开发项目 · 全职',
    'a.exp2.desc':'使用 React Native 和 Flutter 开发移动应用，与 RESTful 后端服务集成。参与使用 PHP、Python 和 JavaScript 框架构建网页平台。',
    'a.exp3.per':'基础阶段','a.exp3.role':'软件开发者','a.exp3.co':'实习与早期项目',
    'a.exp3.desc':'在多种语言和平台上建立基础技能。参与使用 WordPress、PHP 和 Java 的网页开发项目。',
    'a.val.tag':'04 — 价值观','a.val.title':'我的工作方式',
    'a.v1.t':'用户优先','a.v1.d':'好的软件解决真实人的真实问题。我始终以终端用户为中心进行设计和构建。',
    'a.v2.t':'简洁代码','a.v2.d':'易于阅读、维护和扩展的代码才是经得住时间考验的代码。清晰本身就是一个功能。',
    'a.v3.t':'持续学习','a.v3.d':'技术格局不断演变。我积极扩展自己在后端、移动和运维领域的知识。',
    'a.v4.t':'适应性','a.v4.d':'从 Python 到 Flutter 再到 Laravel — 我为工作选择合适的工具，并快速适应新技术栈。',
    'a.cta.tag':'保持联系','a.cta.title':'准备好构建一些东西了吗？',
    'a.cta.sub':'无论您有项目想法、想要合作还是只是想联系 — 我很乐意听取您的意见。',
    'a.cta.b1':'查看项目 →','a.cta.b2':'联系我',
    'p.hero.tag':'精选作品','p.hero.title':'项目',
    'p.hero.sub':'我精选项目的展示 — 每个项目都以目标、精准和对质量的承诺构建。',
    'p.1.badge':'精选','p.1.name':'项目一',
    'p.1.desc':'从零开始构建的综合应用，具有可扩展的架构。后端通过 REST API 处理复杂的数据操作，前端提供快速直观的用户体验。使用 Docker 容器化，实现跨环境的无缝部署。',
    'p.1.watch':'观看演示','p.1.code':'查看代码',
    'p.2.badge':'移动端','p.2.name':'项目二',
    'p.2.desc':'使用 Flutter 和 Dart 构建的跨平台移动应用，从单一代码库在 Android 和 iOS 上提供原生质量体验。与 RESTful 后端无缝集成，实现实时数据和流畅的用户交互。',
    'p.2.watch':'观看演示','p.2.code':'查看代码',
    'p.media':'点击播放演示视频',
    'c.hero.tag':'打个招呼','c.hero.title':'联系我',
    'c.hero.sub':'无论您有项目想法、想要合作还是只是想联系 — 我很乐意听取您的意见。',
    'c.s.lbl':'当前状态','c.s.txt':'开放新机会',
    'c.r.lbl':'关于联系',
    'c.r.txt':"我始终愿意讨论<strong>新项目、创意想法或合作机会</strong>。无论是网页应用、移动项目还是后端 API — 不要犹豫，打声招呼吧。",
    'c.ch.lbl':'联系渠道',
    'c.email.t':'电子邮件','c.gh.t':'GitHub','c.li.t':'LinkedIn','c.cv.t':'简历','c.cv.v':'下载 PDF',
    'c.resp.lbl':'响应时间','c.resp.txt':'我通常在工作日 <strong>24-48 小时</strong>内回复。对于紧急事项，电子邮件是联系我最快的方式。',
    'c.f.title':'发送消息','c.f.sub':'填写表单，我会尽快回复您。',
    'c.f.fn':'名字','c.f.ln':'姓氏','c.f.email':'电子邮件地址','c.f.subj':'主题',
    'c.f.msg':'消息','c.f.submit':'发送消息',
    'c.f.ok.title':'消息已发送！','c.f.ok.txt':'感谢您的联系。我将在 24-48 小时内回复您。','c.f.ok.reset':'发送另一条消息',
    'c.faq.tag':'常见问题','c.faq.title':'常见问题',
    'c.q1':'您是否接受自由职业或合同工作？',
    'c.a1':'是的 — 我对自由职业、合同和全职机会持开放态度。无论是网页应用、移动项目还是后端 API，欢迎通过联系表单或直接发邮件告知详情。',
    'c.q2':'您使用哪些技术？',
    'c.a2':'我的技术栈包括 Python、TypeScript、React Native、JavaScript、REST API、Java、C#、SQL、Docker、Dart、Flutter、WordPress、PHP 和 Laravel。',
    'c.q3':'您能同时构建网页和移动应用吗？',
    'c.a3':'当然可以。我在整个技术栈上工作 — 从网页平台（Laravel、TypeScript、JavaScript）到跨平台移动应用（Flutter/Dart 和 React Native）。',
    'c.q4':'获得响应需要多长时间？',
    'c.a4':'我通常在工作日 24-48 小时内回复。对于紧急事项，电子邮件是最快的渠道。',
    'c.q5':'您是否从事 WordPress 项目？',
    'c.a5':'是的 — WordPress 是我技术栈的一部分。我可以构建自定义主题、插件和内容驱动的网站。我也熟悉 WooCommerce 商店的设置和优化。',
  }
};

// ── Theme ─────────────────────────────────────
const THEME_KEY = 'p_theme';
const LANG_KEY  = 'p_lang';

const ICON_SUN  = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
const ICON_MOON = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(THEME_KEY, t);
  const btn = document.getElementById('themeToggle');
  if (btn) { btn.innerHTML = t === 'dark' ? ICON_SUN : ICON_MOON; btn.title = t === 'dark' ? 'Light mode' : 'Dark mode'; }
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}

// ── Language ──────────────────────────────────
function applyLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[lang]?.[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

function switchLang(lang) { applyLang(lang); }

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
  applyLang(localStorage.getItem(LANG_KEY) || 'en');

  // Hamburger nav
  const tog = document.getElementById('navToggle');
  const lnk = document.getElementById('navLinks');
  if (tog && lnk) tog.addEventListener('click', () => lnk.classList.toggle('open'));
});
