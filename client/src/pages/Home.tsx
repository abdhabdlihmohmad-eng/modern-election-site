/**
 * اتجاه التصميم: ملصق مدني تحريري عربي — كحلي مؤسسي، مرجان مدني، ومسار غير متماثل.
 * هذا الملف يقدّم رحلة قصة انتخابية واضحة من الوعد إلى المشاركة، مع محتوى نموذجي قابل للتخصيص.
 */
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Briefcase,
  Check,
  Heart,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Sprout,
  Twitter,
  Users,
  X,
} from "lucide-react";

const priorities = [
  {
    index: "01",
    icon: Landmark,
    title: "خدمات تقترب من الناس",
    description:
      "مراكز خدمة أكثر كفاءة، أحياء منظمة، وقرارات تبدأ من احتياجات الحياة اليومية.",
    tone: "coral",
  },
  {
    index: "02",
    icon: Briefcase,
    title: "اقتصاد محلي يفتح الفرص",
    description:
      "دعم المشاريع الصغيرة، تدريب يرتبط بسوق العمل، ومساحات تعطي الأفكار فرصة للنمو.",
    tone: "aqua",
  },
  {
    index: "03",
    icon: Sprout,
    title: "مدينة قابلة للحياة",
    description:
      "شوارع آمنة للمشي، ظل أكثر، نقل أوضح، ومناطق عامة تستقبل الجميع.",
    tone: "sand",
  },
];

const commitments = [
  "نستمع إلى الأولويات قبل كتابة الحلول.",
  "نعلن ما يمكن قياسه وما يحتاج وقتًا.",
  "نشارك التقدم بلغة مفهومة ومنتظمة.",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell" dir="rtl">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="العودة إلى بداية نبض الوطن">
          <img
            src="/manus-storage/brand-pulse-mark_165bbd86.png"
            alt="رمز نبض الوطن"
            className="brand-mark"
          />
          <span className="brand-wordmark">نبض الوطن</span>
        </a>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href="#vision">الرؤية</a>
          <a href="#priorities">الأولويات</a>
          <a href="#field">من الميدان</a>
          <a href="#participate">شارك</a>
        </nav>

        <a className="header-action" href="#participate">
          كن ضمن الفريق <ArrowLeft size={17} strokeWidth={2.4} />
        </a>

        <button
          className="menu-trigger"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="فتح قائمة التنقل"
          aria-expanded={menuOpen}
        >
          <Menu size={25} />
        </button>
      </header>

      <aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <span className="mobile-menu-label">التنقل</span>
          <button type="button" onClick={closeMenu} aria-label="إغلاق قائمة التنقل">
            <X size={25} />
          </button>
        </div>
        <nav aria-label="التنقل على الهاتف">
          {[
            ["الرؤية", "#vision"],
            ["الأولويات", "#priorities"],
            ["من الميدان", "#field"],
            ["شارك معنا", "#participate"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
              <ArrowLeft size={19} />
            </a>
          ))}
        </nav>
      </aside>
      <button
        className={`menu-scrim ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="إغلاق القائمة"
        onClick={closeMenu}
      />

      <section className="hero-section" id="top">
        <div className="hero-side-rail" aria-hidden="true">
          <span>الحملة</span>
          <span className="rail-line" />
          <span>2026</span>
        </div>

        <div className="hero-copy">
          <div className="eyebrow"><span /> من المدينة، ولأجلها</div>
          <h1>قرارٌ يُرى<br />في الحياة اليومية.</h1>
          <p>
            نؤمن بأن العمل العام يبدأ من تفاصيل الحي: طريق آمن، فرصة عادلة، وخدمة تصغي للناس قبل أن تتحدث باسمهم.
          </p>
          <div className="hero-ctas">
            <a className="button-primary" href="#priorities">
              اكتشف أولوياتنا <ArrowLeft size={19} />
            </a>
            <a className="button-text" href="#vision">
              لماذا الآن؟ <ArrowUpLeft size={18} />
            </a>
          </div>

          <div className="hero-fact-row" aria-label="مبادئ الحملة">
            <div><strong>03</strong><span>أولويات<br />واضحة</span></div>
            <div><strong>01</strong><span>وعد<br />قابل للقياس</span></div>
            <div><strong>0</strong><span>خطاب<br />بعيد عن الناس</span></div>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-stamp">معًا<br />نصنع<br />الفرق</div>
          <div className="hero-visual">
            <img
              src="/manus-storage/election-hero-community_9d0fb15b.jpg"
              alt="أفراد من المجتمع يتناقشون حول خريطة للمدينة"
            />
          </div>
          <p className="image-caption"><MapPin size={15} /> من جلسة استماع مجتمعية</p>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="section-index"><span>01</span><i /> الرؤية</div>
        <div className="vision-content">
          <p className="kicker">سياسة أقرب إلى الواقع</p>
          <h2>لا نبيع وعودًا بعيدة.<br />نرتّب ما يهم الناس الآن.</h2>
          <div className="vision-text-grid">
            <p>
              ندافع عن مدينة تتسع للناس المختلفين، وتُدار بقرارات مفهومة ومسؤولية مشتركة. لهذا نحول كل عنوان كبير إلى خطوة يمكن متابعة أثرها.
            </p>
            <a href="#field" className="underlined-link">اقرأ حكايات من الميدان <ArrowLeft size={17} /></a>
          </div>
        </div>
        <div className="vision-seal" aria-hidden="true">
          <span>صوت</span><span>الناس</span><span>أولًا</span>
        </div>
      </section>

      <section className="priorities-section" id="priorities">
        <div className="priorities-heading">
          <div className="section-index section-index-light"><span>02</span><i /> الأولويات</div>
          <h2>ثلاثة التزامات.<br /><em>أثرٌ يلمسه الجميع.</em></h2>
          <p>برنامج مركز على ما يحسن الحياة في الأحياء، ويعطي كل جهد معيارًا واضحًا للمتابعة.</p>
        </div>
        <div className="priority-list">
          {priorities.map(({ index, icon: Icon, title, description, tone }) => (
            <article className={`priority-card ${tone}`} key={index}>
              <div className="priority-meta"><span>{index}</span><Icon size={28} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#participate" aria-label={`ساهم في أولوية ${title}`}>
                <ArrowLeft size={22} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="field-section" id="field">
        <div className="field-visual">
          <img
            src="/manus-storage/election-neighborhood_7507c953.jpg"
            alt="سكان يتناقشون حول خريطة نقل في حي محلي"
          />
          <span className="field-label">من الميدان</span>
        </div>
        <div className="field-copy">
          <div className="section-index"><span>03</span><i /> كيف نعمل</div>
          <h2>نبدأ بالسؤال.<br />ثم نلتزم بما سمعناه.</h2>
          <p>
            الحملة ليست منصة إلقاء. إنها مساحة منظمة للاستماع، وتحديد الأولويات، ثم العودة إلى الناس بتقدم يمكنهم رؤيته ومناقشته.
          </p>
          <ul className="commitment-list">
            {commitments.map((commitment) => (
              <li key={commitment}><Check size={18} strokeWidth={3} /> {commitment}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pulse-section" aria-label="مسار المشاركة">
        <div className="pulse-title"><span>المشاركة ليست خطوة واحدة</span><strong>لها نبض مستمر.</strong></div>
        <div className="pulse-path">
          <div><b>01</b><p>قل لنا ما الذي يحتاجه حيك.</p></div>
          <i />
          <div><b>02</b><p>راجع الأولويات واسأل عن التفاصيل.</p></div>
          <i />
          <div><b>03</b><p>اختر دورك في الحملة على الأرض.</p></div>
        </div>
      </section>

      <section className="participate-section" id="participate">
        <div className="participate-copy">
          <div className="eyebrow eyebrow-light"><span /> مساحة لك في الحملة</div>
          <h2>الفكرة تكبر<br />حين تجد من يحملها.</h2>
          <p>سواء أردت الاستماع في حيّك، تنظيم لقاء صغير، أو دعم فريق الميدان، سنساعدك على اختيار نقطة البداية المناسبة.</p>
          <a className="button-coral" href="mailto:team@nabdwatan.example?subject=أرغب%20في%20المشاركة%20في%20الحملة">
            أرسل رسالة للفريق <Mail size={19} />
          </a>
          <span className="participate-note"><Heart size={15} fill="currentColor" /> نموذج عرض قابل لتخصيص بيانات الحملة ووسائل التواصل.</span>
        </div>
        <div className="participate-photo">
          <img
            src="/manus-storage/election-volunteers_9c8504fe.jpg"
            alt="متطوعون يعدّون موادًا للتواصل المجتمعي"
          />
          <div className="photo-credential"><Users size={20} /><span>المشاركة<br />تصنع المسار</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/brand-pulse-mark_165bbd86.png" alt="" />
          <span>نبض الوطن</span>
        </div>
        <p>منصة انتخابية نموذجية؛ تُحدّث تفاصيل البرنامج والفريق قبل استخدامها كحملة فعلية.</p>
        <div className="footer-meta">
          <div className="socials" aria-label="قنوات التواصل">
            <a href="#top" aria-label="إكس"><Twitter size={18} /></a>
            <a href="#top" aria-label="إنستغرام"><Instagram size={18} /></a>
          </div>
          <span>© 2026 نبض الوطن</span>
        </div>
      </footer>
    </main>
  );
}
