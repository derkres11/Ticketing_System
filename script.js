/* ============================================================
     SECTION A — TRANSLATIONS
     Each key holds an English and Turkish string.
     Usage: t('key') returns the string in the current language.
  ============================================================ */
  const TRANSLATIONS = {

    /* ── App-wide ── */
    appName:         { en: 'CIU Student Support', tr: 'CIU Student Support' },
    appTagline:      { en: 'Cyprus International University support portal.', tr: 'Cyprus International University destek portalı.' },
    darkMode:        { en: 'Dark', tr: 'Koyu' },
    lightMode:       { en: 'Light', tr: 'Açık' },
    logout:          { en: 'Log out', tr: 'Çıkış yap' },
    save:            { en: 'Save', tr: 'Kaydet' },
    cancel:          { en: 'Cancel', tr: 'İptal' },
    submit:          { en: 'Submit', tr: 'Gönder' },
    close:           { en: 'Close', tr: 'Kapat' },
    back:            { en: 'Back', tr: 'Geri' },
    all:             { en: 'All', tr: 'Tümü' },
    open:            { en: 'Open', tr: 'Açık' },
    resolved:        { en: 'Resolved', tr: 'Çözüldü' },
    pending:         { en: 'Pending', tr: 'Beklemede' },
    online:          { en: 'Online', tr: 'Çevrimiçi' },
    offline:         { en: 'Offline', tr: 'Çevrimdışı' },

    /* ── Auth ── */
    login:           { en: 'Log in', tr: 'Giriş yap' },
    register:        { en: 'Register', tr: 'Kayıt ol' },
    email:           { en: 'E-mail address', tr: 'E-posta adresi' },
    password:        { en: 'Password', tr: 'Şifre' },
    confirmPassword: { en: 'Confirm password', tr: 'Şifreyi onayla' },
    fullName:        { en: 'Full name', tr: 'Ad Soyad' },
    studentId:       { en: 'Student ID', tr: 'Öğrenci numarası' },
    department:      { en: 'Department', tr: 'Bölüm' },
    roleStudent:     { en: 'Student', tr: 'Öğrenci' },
    roleTeacher:     { en: 'Teacher', tr: 'Öğretmen' },
    roleAdmin:       { en: 'Admin', tr: 'Yönetici' },
    noAccount:       { en: "Don't have an account?", tr: 'Hesabınız yok mu?' },
    hasAccount:      { en: 'Already have an account?', tr: 'Zaten hesabınız var mı?' },
    loginIntroTitle: { en: 'Welcome back', tr: 'Tekrar hoş geldiniz' },
    loginIntroBody:  { en: 'Select your role and sign in to access your personalised dashboard. Students, teachers, and administrators each have a tailored experience.', tr: 'Rolünüzü seçin ve kişiselleştirilmiş panelinize erişmek için giriş yapın. Öğrenciler, öğretmenler ve yöneticiler için özel deneyim sunulmaktadır.' },
    registerIntroTitle: { en: 'Create your account', tr: 'Hesabınızı oluşturun' },
    registerIntroBody:  { en: 'Fill in your details below to register. Once registered, you can submit inquiries, track tickets, and get answers from the FAQ chatbot — all without visiting your instructor in person.', tr: 'Kayıt olmak için aşağıdaki bilgileri doldurun. Kayıt olduktan sonra talep gönderebilir, biletleri takip edebilir ve SSS sohbet botundan yanıt alabilirsiniz — bizzat öğretmeninizi ziyaret etmeden.' },

    /* ── Navigation ── */
    navMyInquiries:  { en: 'My inquiries', tr: 'Taleplerim' },
    navMyTickets:    { en: 'My tickets', tr: 'Biletlerim' },
    navMeetings:     { en: 'Meeting requests', tr: 'Toplantı talepleri' },
    navFAQ:          { en: 'Browse FAQ', tr: 'SSS' },
    navInbox:        { en: 'Inquiry inbox', tr: 'Talep kutusu' },
    navTickets:      { en: 'Tickets', tr: 'Biletler' },
    navOfficeHours:  { en: 'My office hours', tr: 'Ofis saatlerim' },
    navFAQMgr:       { en: 'FAQ manager', tr: 'SSS yöneticisi' },
    navAnalytics:    { en: 'Analytics', tr: 'Analitik' },
    navUsers:        { en: 'Users', tr: 'Kullanıcılar' },

    /* ── Student portal ── */
    studentPortalTitle:  { en: 'My inquiries', tr: 'Taleplerim' },
    studentPortalIntro:  { en: 'This is your support dashboard. You can see all the inquiries you have sent to your teachers, their statuses, and your tickets. If you have a quick question, try the chatbot (bottom right) first — it searches our FAQ instantly.', tr: 'Bu sizin destek panelinizdir. Öğretmenlerinize gönderdiğiniz tüm talepleri, durumlarını ve biletlerinizi görebilirsiniz. Hızlı bir sorunuz varsa önce sohbet botunu (sağ alt) deneyin — SSS\'yi anında arar.' },
    newInquiry:          { en: '+ New inquiry', tr: '+ Yeni talep' },
    awaitingTeacher:     { en: 'Awaiting teacher', tr: 'Öğretmen bekliyor' },
    answeredByTeacher:   { en: 'Answered by teacher', tr: 'Öğretmen yanıtladı' },
    resolvedByFAQ:       { en: 'Resolved by FAQ', tr: 'SSS ile çözüldü' },
    ticketOpen:          { en: 'Ticket open', tr: 'Bilet açık' },

    /* ── New inquiry form ── */
    newInquiryTitle:     { en: 'New inquiry', tr: 'Yeni talep' },
    newInquiryIntro:     { en: 'Before submitting, check if the chatbot can answer your question (bottom right). If not, fill in this form. Your teacher will receive it and decide whether to reply here, open a formal ticket, or schedule a meeting.', tr: 'Göndermeden önce sohbet botunun sorunuzu yanıtlayıp yanıtlayamadığını kontrol edin (sağ alt). Değilse, bu formu doldurun. Öğretmeniniz alacak ve burada yanıtlamayı, resmi bilet açmayı veya toplantı planlamayı seçecek.' },
    whatIsAbout:         { en: 'What is your question about?', tr: 'Sorunuz ne hakkında?' },
    selectCategory:      { en: 'Category', tr: 'Kategori' },
    selectCourse:        { en: 'Course', tr: 'Ders' },
    selectTeacher:       { en: 'Select your teacher', tr: 'Öğretmeninizi seçin' },
    dateOfIssue:         { en: 'Date of issue', tr: 'Sorun tarihi' },
    describeIssue:       { en: 'Describe your issue', tr: 'Sorunu açıklayın' },
    attachment:          { en: 'Attachment (optional)', tr: 'Ek (isteğe bağlı)' },
    aiTypeSuggestion:    { en: 'AI suggests', tr: 'Yapay zeka önerisi' },
    aiSuggestSuffix:     { en: 'based on your subject. You can change this.', tr: 'konunuza göre. Değiştirebilirsiniz.' },
    dupWarn:             { en: 'A similar inquiry was sent recently. Your teacher may already be looking into this.', tr: 'Yakın zamanda benzer bir talep gönderildi. Öğretmeniniz bunu zaten inceliyor olabilir.' },
    sendToTeacher:       { en: 'Send to teacher', tr: 'Öğretmene gönder' },

    /* ── Categories ── */
    catAttendance:  { en: 'Attendance issue', tr: 'Devam sorunu' },
    catTimetable:   { en: 'Timetable clash', tr: 'Program çakışması' },
    catCourse:      { en: 'Course content', tr: 'Ders içeriği' },
    catGrading:     { en: 'Exam / grading', tr: 'Sınav / notlandırma' },
    catOther:       { en: 'Other', tr: 'Diğer' },

    /* ── Chatbot ── */
    chatbotTitle:    { en: 'Support assistant', tr: 'Destek asistanı' },
    chatbotSub:      { en: '● Online · answers from FAQ', tr: '● Çevrimiçi · SSS\'den yanıtlar' },
    chatbotGreeting: { en: "Hi! I can answer common questions from our FAQ. What's on your mind?", tr: 'Merhaba! SSS\'den sık sorulan soruları yanıtlayabilirim. Neye ihtiyacınız var?' },
    chatbotChip1:    { en: 'Course clash', tr: 'Ders çakışması' },
    chatbotChip2:    { en: 'Late registration', tr: 'Geç kayıt' },
    chatbotChip3:    { en: 'Make-up / resit exam', tr: 'Make-up / resit sınavı' },
    chatbotNoMatch:  { en: "I couldn't find a clear answer in the FAQ. Try sending an inquiry to your teacher.", tr: 'SSS\'de net bir yanıt bulamadım. Öğretmeninize talep göndermeyi deneyin.' },
    chatbotOpenTicket: { en: 'Send inquiry instead', tr: 'Bunun yerine talep gönder' },
    stillNeedHelp:   { en: 'Still need help?', tr: 'Hâlâ yardıma mı ihtiyacınız var?' },
    typeAQuestion:   { en: 'Type a question…', tr: 'Bir soru yazın…' },

    /* ── Teacher inbox ── */
    teacherInboxTitle: { en: 'Inquiry inbox', tr: 'Talep kutusu' },
    teacherInboxIntro: { en: 'These are inquiries students have sent after the chatbot could not answer their questions. Review each one and choose to reply directly, escalate to a formal ticket, or schedule a meeting. Your decision controls whether a physical office visit is needed.', tr: 'Bunlar, sohbet botunun sorularını yanıtlayamamasının ardından öğrencilerin gönderdiği taleplerdir. Her birini inceleyin ve doğrudan yanıtlamayı, resmi bilete yükseltmeyi veya toplantı planlamayı seçin. Kararınız, fiziksel bir ofis ziyaretinin gerekip gerekmediğini belirler.' },
    incomingInquiries: { en: 'Incoming inquiries', tr: 'Gelen talepler' },
    openTickets:       { en: 'Open tickets', tr: 'Açık biletler' },
    allCourses:        { en: 'All courses', tr: 'Tüm dersler' },
    unreadOnly:        { en: 'Unread', tr: 'Okunmamış' },

    /* ── Triage view ── */
    triageIntro:    { en: 'Review the student\'s message and chatbot transcript below. Use the AI summary for a quick overview, then choose one of the three actions at the bottom: reply here to resolve immediately, escalate to a ticket for formal tracking, or schedule a meeting only as a last resort.', tr: 'Aşağıdaki öğrenci mesajını ve sohbet botu transkripsiyonunu inceleyin. Hızlı genel bakış için yapay zeka özetini kullanın, ardından alttaki üç eylemden birini seçin: hemen çözmek için burada yanıtlayın, resmi takip için bilete yükseltin veya son çare olarak toplantı planlayın.' },
    chatTranscript: { en: 'Chatbot transcript', tr: 'Sohbet botu transkripsiyonu' },
    studentMessage: { en: 'Student message', tr: 'Öğrenci mesajı' },
    aiSummary:      { en: 'AI summary', tr: 'Yapay zeka özeti' },
    yourReply:      { en: 'Your reply', tr: 'Yanıtınız' },
    replyPlaceholder:{ en: 'Type your reply…', tr: 'Yanıtınızı yazın…' },
    cannedReply:    { en: 'Canned reply', tr: 'Hazır yanıt' },
    requestMoreInfo:{ en: 'Request info', tr: 'Bilgi iste' },
    chooseAction:   { en: 'Choose how to handle this inquiry', tr: 'Bu talebi nasıl ele almak istiyorsunuz?' },
    actResolve:     { en: 'Reply and resolve', tr: 'Yanıtla ve çöz' },
    actResolveDesc: { en: 'Answer here — no ticket needed', tr: 'Burada yanıtla — bilet gerekmiyor' },
    actEscalate:    { en: 'Escalate to ticket', tr: 'Bilete yükselt' },
    actEscalateDesc:{ en: 'Needs formal tracking', tr: 'Resmi takip gerekli' },
    actMeeting:     { en: 'Schedule meeting', tr: 'Toplantı planla' },
    actMeetingDesc: { en: 'Complex — needs in-person', tr: 'Karmaşık — yüz yüze gerekli' },
    studentInfo:    { en: 'Student info', tr: 'Öğrenci bilgisi' },
    similarCases:   { en: 'Similar cases', tr: 'Benzer vakalar' },

    /* ── Ticket thread ── */
    ticketThreadIntro: { en: 'This ticket was escalated from an inquiry. Both you and the student can exchange messages here. If the issue is still not resolved after this exchange, use the button below to offer the student a meeting slot.', tr: 'Bu bilet bir talepten yükseltildi. Hem siz hem de öğrenci burada mesaj alışverişinde bulunabilirsiniz. Bu yazışmadan sonra sorun hâlâ çözülmediyse, öğrenciye toplantı slotu önermek için aşağıdaki düğmeyi kullanın.' },
    convThread:        { en: 'Conversation thread', tr: 'Konuşma iş parçacığı' },
    stillUnresolved:   { en: 'Still unresolved after exchange?', tr: 'Yazışma sonrası hâlâ çözülmedi mi?' },
    offerMeetingSlot:  { en: 'Offer a meeting slot to student', tr: 'Öğrenciye toplantı slotu öner' },
    closeTicket:       { en: 'Close ticket', tr: 'Bileti kapat' },
    autoFilledNote:    { en: 'This ticket was auto-created from an inquiry. Context is preserved.', tr: 'Bu bilet bir talepten otomatik oluşturuldu. Bağlam korundu.' },

    /* ── Meeting request (student) ── */
    meetingReqTitle: { en: 'Request a meeting', tr: 'Toplantı talep et' },
    meetingReqIntro: { en: 'Meetings are the last resort — they are only available after a ticket has been opened and not resolved. Select your teacher, choose Office or Online, pick an available slot from their office hours, and submit. Your teacher will approve or reject the request.', tr: 'Toplantılar son çaredir — yalnızca bir bilet açılıp çözülmeden sonra kullanılabilir. Öğretmeninizi seçin, Ofis veya Çevrimiçi seçeneğini belirleyin, ofis saatlerinden uygun bir slot seçin ve gönderin. Öğretmeniniz isteği onaylayacak veya reddedecek.' },
    meetingType:     { en: 'Meeting type', tr: 'Toplantı türü' },
    inPerson:        { en: '🏢  In-person office', tr: '🏢  Yüz yüze ofis' },
    onlineMeeting:   { en: '💻  Online meeting', tr: '💻  Çevrimiçi toplantı' },
    officeHours:     { en: 'Available office hours', tr: 'Uygun ofis saatleri' },
    slotTaken:       { en: 'Taken', tr: 'Dolu' },
    addNote:         { en: 'Brief note to teacher (optional)', tr: 'Öğretmene kısa not (isteğe bağlı)' },
    sendRequest:     { en: 'Send meeting request', tr: 'Toplantı talebini gönder' },

    /* ── Meeting request notifications ── */
    meetingApproved:       { en: '✓ Meeting approved', tr: '✓ Toplantı onaylandı' },
    meetingApprovedDetail: { en: 'Your teacher has accepted your meeting request. Check your e-mail for the confirmation.', tr: 'Öğretmeniniz toplantı talebinizi kabul etti. Onay için e-postanızı kontrol edin.' },
    meetingRejected:       { en: '✕ Meeting not approved', tr: '✕ Toplantı onaylanmadı' },
    meetingRejectedDetail: { en: 'Your teacher is unavailable at that time. Please choose another date from their office hours.', tr: 'Öğretmeniniz o saatte müsait değil. Lütfen ofis saatlerinden başka bir tarih seçin.' },
    meetingPending:        { en: '⏳ Request sent — awaiting teacher response', tr: '⏳ Talep gönderildi — öğretmen yanıtı bekleniyor' },

    /* ── Teacher: meeting requests inbox ── */
    meetingRequestsTitle:  { en: 'Meeting requests', tr: 'Toplantı talepleri' },
    meetingRequestsIntro:  { en: 'Students can only reach this screen after a ticket was not resolved. Review each request and choose to accept or reject. Rejected requests prompt the student to choose another time slot.', tr: 'Öğrenciler bu ekrana yalnızca bir bilet çözülmeden sonra ulaşabilir. Her isteği inceleyin ve kabul etmeyi veya reddetmeyi seçin. Reddedilen istekler öğrenciden başka bir zaman dilimi seçmesini ister.' },
    acceptRequest:   { en: 'Accept', tr: 'Onayla' },
    rejectRequest:   { en: 'Reject', tr: 'Reddet' },

    /* ── Office hours manager (teacher) ── */
    officeHoursTitle: { en: 'My office hours', tr: 'Ofis saatlerim' },
    officeHoursIntro: { en: 'Set the days and times when students can request a meeting with you. Slots you mark as available will appear in the student\'s meeting request form. You can set different hours for in-person and online meetings.', tr: 'Öğrencilerin sizinle toplantı talep edebileceği gün ve saatleri ayarlayın. Müsait olarak işaretlediğiniz slotlar, öğrencinin toplantı talep formunda görünecektir. Yüz yüze ve çevrimiçi toplantılar için farklı saatler belirleyebilirsiniz.' },

    /* ── Analytics ── */
    analyticsTitle:   { en: 'Analytics dashboard', tr: 'Analitik panosu' },
    analyticsIntro:   { en: 'This dashboard shows how effectively the system is reducing unnecessary office visits. The most important metric is the Stage Resolution chart — it shows what percentage of issues are being solved at each layer (chatbot, direct reply, ticket, meeting). A healthy system resolves most issues in the first two stages.', tr: 'Bu pano, sistemin gereksiz ofis ziyaretlerini ne kadar etkili azalttığını gösterir. En önemli ölçüt, Aşama Çözünürlüğü grafiğidir — sorunların her katmanda (sohbet botu, doğrudan yanıt, bilet, toplantı) kaç yüzdesinin çözüldüğünü gösterir. Sağlıklı bir sistem çoğu sorunu ilk iki aşamada çözer.' },
    totalInquiries:   { en: 'Total inquiries', tr: 'Toplam talep' },
    faqDeflections:   { en: 'FAQ deflections', tr: 'SSS yönlendirmesi' },
    avgResponse:      { en: 'Avg. response', tr: 'Ort. yanıt' },
    officeMeetings:   { en: 'Office meetings', tr: 'Ofis toplantıları' },
    resolutionStage:  { en: 'Resolution by stage', tr: 'Aşamaya göre çözüm' },
    byType:           { en: 'Inquiries by type', tr: 'Talep türüne göre' },
    byTeacher:        { en: 'Avg. response time by teacher', tr: 'Öğretmene göre ort. yanıt süresi' },
    topFAQ:           { en: 'Top FAQ topics resolved by chatbot', tr: 'Sohbet botu tarafından çözülen en iyi SSS konuları' },
  };

  /* ============================================================
     SECTION B — APPLICATION STATE
     Global variables that track the current user, language,
     theme, and active screen. Mutate only through helpers.
  ============================================================ */
  const STATE = {
    lang:       'en',           // 'en' | 'tr'
    theme:      'light',        // 'light' | 'dark'
    user:       null,           // { name, role, initials }
    screen:     'login',        // current screen id
    loginRole:  'student',      // role tab selected on login page
    authMode:   'login',        // 'login' | 'register'
    chatOpen:   false,          // chatbot widget open?
    meetingType:'office',       // 'office' | 'online'
    selectedTeacher: null,      // id of selected teacher in forms
    selectedSlot:    null,      // selected office hour slot
    selectedCategory: 'catAttendance',
    inquiryFilter: 'all',
    teacherCourseFilter: 'all',
    teacherUnreadOnly: false,
    faqCategory: 'all',
    faqQuery: '',
    /* Demo meeting requests — simulated data */
    meetingRequests: [
      { id:1, student:'A. Yılmaz', course:'CS301', type:'office', slot:'Tue 14:00', status:'pending',  note:'Cannot resolve attendance issue via ticket.' },
      { id:2, student:'C. Arslan', course:'CS401', type:'online', slot:'Wed 10:00', status:'approved', note:'Grade dispute unresolved after 3 exchanges.' },
      { id:3, student:'D. Kaya',   course:'CS301', type:'office', slot:'Thu 11:00', status:'rejected', note:'Lab access issue.' },
    ],
  };

  /* ============================================================
     SECTION C — STATIC DATA
     Teachers, courses, office hours — in a real app these would
     come from the backend API.
  ============================================================ */

  /* Teacher colour palette for avatar backgrounds */
  const TEACHER_COLORS = ['#185FA5','#1D9E75','#EF9F27','#D85A30','#7F77DD','#D4537E'];

  const TEACHERS = [
    { id:'dk', name:'Dr. Demir Kaya',    dept:'Computer Sci.', courses:['CS301','CS401'],  color:TEACHER_COLORS[0], online:true,
      officeHours:{ office:['Mon 10:00','Mon 14:00','Wed 10:00','Fri 13:00'], online:['Tue 11:00','Thu 14:00','Fri 15:00'] } },
    { id:'sa', name:'Dr. Selin Arslan',  dept:'Software Eng.', courses:['CS302','CS302L'], color:TEACHER_COLORS[1], online:true,
      officeHours:{ office:['Tue 09:00','Tue 14:00','Thu 10:00'], online:['Mon 13:00','Wed 15:00','Thu 16:00'] } },
    { id:'ms', name:'Dr. Mert Şahin',   dept:'Mathematics',   courses:['MATH201'],        color:TEACHER_COLORS[2], online:false,
      officeHours:{ office:['Mon 11:00','Wed 11:00','Wed 14:00'], online:['Tue 13:00','Fri 10:00'] } },
    { id:'ns', name:'Dr. Narin Sümer',  dept:'Computer Sci.', courses:['CS403','CS501'],  color:TEACHER_COLORS[3], online:true,
      officeHours:{ office:['Tue 10:00','Thu 09:00','Thu 14:00'], online:['Mon 15:00','Wed 16:00'] } },
    { id:'bk', name:'Dr. Bora Korkmaz', dept:'Registrar',     courses:['All departments'],color:TEACHER_COLORS[4], online:false,
      officeHours:{ office:['Wed 13:00','Fri 09:00','Fri 11:00'], online:['Thu 11:00'] } },
  ];

  /* Slots that are already booked (demo) */
  const TAKEN_SLOTS = { dk:['Mon 14:00','Fri 13:00'], sa:['Tue 09:00'], ms:[], ns:['Tue 10:00'], bk:[] };

  const COURSES = ['CS301','CS302','CS302L','CS401','CS403','CS501','MATH201'];

  const FAQ_CATEGORIES = [
    { id:'all', label:{ en:'All advisor topics', tr:'Tüm danışmanlık konuları' } },
    { id:'registration', label:{ en:'Course registration', tr:'Ders kayıtları' } },
    { id:'clash', label:{ en:'Course clashes', tr:'Ders çakışmaları' } },
    { id:'attendance', label:{ en:'Attendance', tr:'Devam / attendance' } },
    { id:'late', label:{ en:'Late registration', tr:'Geç kayıt' } },
    { id:'grades', label:{ en:'Grades', tr:'Not / puan' } },
    { id:'exams', label:{ en:'Exam dates', tr:'Sınav tarihleri' } },
    { id:'makeup', label:{ en:'Make-up / resit', tr:'Make-up / resit' } },
    { id:'graduation', label:{ en:'Graduation', tr:'Mezuniyet' } },
    { id:'extension', label:{ en:'Semester extension', tr:'Dönem uzatma' } },
  ];

  const FAQ_ITEMS = [
    {
      category:'registration',
      tags:['registration','course selection','advisor approval'],
      q:{ en:'Which courses should I register for this semester?', tr:'Bu dönem hangi dersleri seçmeliyim?' },
      a:{ en:'Start with the curriculum plan for your department, then prioritize failed or prerequisite courses. If you are unsure, send your advisor your student number and current transcript before the add/drop deadline.', tr:'Bölümünüzün ders planından başlayın; önce başarısız olduğunuz veya ön koşul olan derslere öncelik verin. Emin değilseniz add/drop süresi bitmeden danışmanınıza öğrenci numaranızı ve güncel transkriptinizi gönderin.' },
    },
    {
      category:'registration',
      tags:['advisor approval','course add','course drop'],
      q:{ en:'My selected courses are waiting for advisor approval. What should I do?', tr:'Seçtiğim dersler advisor onayı bekliyor. Ne yapmalıyım?' },
      a:{ en:'Check that you selected the correct section and that there is no clash. If everything looks correct, message your advisor with the course codes and sections you want approved.', tr:'Doğru şube/section seçtiğinizi ve çakışma olmadığını kontrol edin. Her şey doğruysa danışmanınıza onaylanmasını istediğiniz ders kodlarını ve section bilgilerini yazın.' },
    },
    {
      category:'registration',
      tags:['capacity','quota','section full'],
      q:{ en:'The course section I need is full. Can my advisor add me?', tr:'Almam gereken dersin section kontenjanı dolu. Advisor beni ekleyebilir mi?' },
      a:{ en:'Advisors usually cannot directly increase capacity. Ask your advisor whether another section is suitable. If the course is required for graduation, your advisor may guide you to the department secretary or course coordinator.', tr:'Advisor genelde kontenjanı doğrudan artıramaz. Başka bir section uygun mu danışmanınıza sorun. Ders mezuniyet için zorunluysa advisor sizi bölüm sekreterliği veya ders koordinatörüne yönlendirebilir.' },
    },
    {
      category:'registration',
      tags:['blocked registration','system error','cannot register'],
      q:{ en:'The system does not let me register for a course. What information should I send my advisor?', tr:'Sistem bir derse kayıt olmama izin vermiyor. Advisor’a hangi bilgileri göndermeliyim?' },
      a:{ en:'Send the course code, section, error message screenshot, your student number, and whether you passed the prerequisite. This helps your advisor understand whether it is a prerequisite, quota, timetable, or system issue.', tr:'Ders kodunu, section bilgisini, hata mesajı ekran görüntüsünü, öğrenci numaranızı ve ön koşulu geçip geçmediğinizi gönderin. Böylece advisor bunun ön koşul, kontenjan, çakışma veya sistem sorunu olup olmadığını anlayabilir.' },
    },
    {
      category:'registration',
      tags:['wrong course','remove course','drop course'],
      q:{ en:'I selected the wrong course by mistake. What should I do?', tr:'Yanlışlıkla yanlış ders seçtim. Ne yapmalıyım?' },
      a:{ en:'If add/drop is still open, remove the wrong course and choose the correct one, then ask your advisor to approve the updated list. If the deadline passed, contact your advisor immediately with the reason.', tr:'Add/drop süresi açıksa yanlış dersi çıkarıp doğru dersi seçin ve güncel listenin onayı için advisorunuza yazın. Süre geçtiyse gerekçenizle birlikte hemen advisorunuza ulaşın.' },
    },
    {
      category:'registration',
      tags:['elective','technical elective','free elective'],
      q:{ en:'How do I know which elective course I should choose?', tr:'Hangi seçmeli dersi seçmem gerektiğini nasıl anlayabilirim?' },
      a:{ en:'Check whether you need a technical elective, free elective, university elective, or department elective. If you are unsure, send your advisor your transcript and the elective options you are considering.', tr:'Technical elective, free elective, university elective veya department elective ihtiyacınız olup olmadığını kontrol edin. Emin değilseniz transkriptinizi ve düşündüğünüz seçmeli dersleri advisorunuza gönderin.' },
    },
    {
      category:'registration',
      tags:['prerequisite','pre-requisite','cannot take course'],
      q:{ en:'Can I take a course if I have not passed its prerequisite?', tr:'Ön koşul dersini geçmeden bu dersi alabilir miyim?' },
      a:{ en:'Usually no. Prerequisite rules protect your course sequence. Ask your advisor whether there is an official exception process, but do not assume approval is possible.', tr:'Genellikle hayır. Ön koşul kuralları ders sıralamanızı korumak içindir. Resmi bir istisna süreci olup olmadığını advisorunuza sorun, fakat onay verileceğini varsaymayın.' },
    },
    {
      category:'registration',
      tags:['retake','improve grade','repeat course'],
      q:{ en:'Should I retake a course to improve my grade?', tr:'Notumu yükseltmek için bir dersi tekrar almalı mıyım?' },
      a:{ en:'Ask your advisor how retaking the course affects your GPA, graduation timing, and current workload. Retaking may help your GPA, but it can also create timetable or credit load pressure.', tr:'Dersi tekrar almanın GPA, mezuniyet zamanı ve dönem yükünüzü nasıl etkileyeceğini advisorunuza sorun. Tekrar almak GPA için faydalı olabilir ama program çakışması veya kredi yükü baskısı oluşturabilir.' },
    },
    {
      category:'registration',
      tags:['credit load','maximum credits','minimum credits'],
      q:{ en:'How many credits should I take in one semester?', tr:'Bir dönemde kaç kredi almalıyım?' },
      a:{ en:'Your credit load depends on your GPA, failed courses, prerequisites, and graduation plan. Share your intended course list with your advisor before final approval.', tr:'Kredi yükünüz GPA’inize, başarısız derslerinize, ön koşullara ve mezuniyet planınıza bağlıdır. Final onaydan önce seçmek istediğiniz ders listesini advisorunuzla paylaşın.' },
    },
    {
      category:'registration',
      tags:['summer school','summer course','take course in summer'],
      q:{ en:'Can I take this course in summer school?', tr:'Bu dersi yaz okulunda alabilir miyim?' },
      a:{ en:'Ask whether the course is offered in summer and whether it fits your prerequisite/graduation plan. Your advisor can help you decide if waiting for summer is risky.', tr:'Dersin yaz okulunda açılıp açılmadığını ve ön koşul/mezuniyet planınıza uyup uymadığını sorun. Advisor yaz okulunu beklemenin riskli olup olmadığını değerlendirmenize yardım edebilir.' },
    },
    {
      category:'clash',
      tags:['clash','timetable','schedule'],
      q:{ en:'Two required courses clash in my timetable. What should I do?', tr:'İki zorunlu dersim programda çakışıyor. Ne yapmalıyım?' },
      a:{ en:'Do not register both without asking. Send your advisor the two course codes, sections, and clash time. Your advisor can suggest an alternative section, a different course order, or whether one course should be postponed.', tr:'Danışmadan iki dersi aynı anda kaydetmeyin. Danışmanınıza iki ders kodunu, sectionları ve çakışan saati gönderin. Advisor alternatif section, farklı ders sıralaması veya bir dersi erteleme konusunda yönlendirebilir.' },
    },
    {
      category:'clash',
      tags:['lab clash','lecture clash','section change'],
      q:{ en:'Only the lab/tutorial hour clashes. Can I stay in the lecture?', tr:'Sadece lab/tutorial saati çakışıyor. Lecture’da kalabilir miyim?' },
      a:{ en:'It depends on the course rules. Ask your advisor whether the lab/tutorial is compulsory and whether another lab section is available. Include your current section numbers in the message.', tr:'Bu dersin kurallarına bağlıdır. Lab/tutorial zorunlu mu ve başka lab section var mı advisorunuza sorun. Mesajınıza mevcut section numaralarınızı ekleyin.' },
    },
    {
      category:'attendance',
      tags:['attendance','absent','wrong attendance'],
      q:{ en:'I attended class but I was marked absent. What should I do?', tr:'Derse girdim ama yok yazılmışım. Ne yapmalıyım?' },
      a:{ en:'First contact the course instructor with the date and evidence if you have it. If the issue affects your warning status or registration plan, inform your advisor too so they can guide you.', tr:'Önce dersin hocasına tarih ve varsa kanıt ile yazın. Bu durum uyarı/attendance durumunuzu veya ders planınızı etkiliyorsa advisorunuza da bilgi verin.' },
    },
    {
      category:'attendance',
      tags:['attendance limit','70 percent','risk'],
      q:{ en:'My attendance is close to the limit. Can my advisor fix it?', tr:'Attendance oranım sınıra yakın. Advisor bunu düzeltebilir mi?' },
      a:{ en:'Your advisor cannot change attendance records. They can explain the risk, help you plan future attendance, and advise whether you should contact the instructor about a possible recording mistake.', tr:'Advisor attendance kaydını değiştiremez. Riskinizi açıklayabilir, kalan haftalar için plan yapmanıza yardım edebilir ve kayıt hatası varsa hocaya yazmanız konusunda yönlendirebilir.' },
    },
    {
      category:'late',
      tags:['late registration','late add','missed registration'],
      q:{ en:'I registered late and missed the first classes. What should I do?', tr:'Geç kayıt oldum ve ilk dersleri kaçırdım. Ne yapmalıyım?' },
      a:{ en:'Write to each course instructor and ask how to catch up. Then inform your advisor, especially if late registration caused attendance or prerequisite problems.', tr:'Her dersin hocasına yazıp eksikleri nasıl tamamlayacağınızı sorun. Geç kayıt attendance veya ön koşul sorunu oluşturduysa advisorunuza mutlaka bilgi verin.' },
    },
    {
      category:'late',
      tags:['add drop','deadline','late course change'],
      q:{ en:'The add/drop deadline passed. Can I still change a course?', tr:'Add/drop süresi geçti. Hâlâ ders değiştirebilir miyim?' },
      a:{ en:'After the deadline, changes may require department or faculty approval and are not guaranteed. Ask your advisor first and include the reason, course code, and the section you want.', tr:'Süre geçtikten sonra değişiklik bölüm veya fakülte onayı gerektirebilir ve garanti değildir. Önce advisorunuza gerekçe, ders kodu ve istediğiniz section ile yazın.' },
    },
    {
      category:'grades',
      tags:['grade','mark','appeal','points'],
      q:{ en:'I think my grade or point is wrong. Should I ask my advisor?', tr:'Notumun veya puanımın yanlış olduğunu düşünüyorum. Advisor’a mı yazmalıyım?' },
      a:{ en:'Grade corrections are handled by the course instructor. Contact the instructor first with a clear explanation. If the result affects probation, graduation, or course registration, update your advisor.', tr:'Not düzeltmeleri ders hocası tarafından yapılır. Önce hocaya net açıklama ile yazın. Sonuç probation, mezuniyet veya ders kaydınızı etkiliyorsa advisorunuza bilgi verin.' },
    },
    {
      category:'grades',
      tags:['failed course','repeat','retake'],
      q:{ en:'I failed a course. Do I have to take it again immediately?', tr:'Bir dersten kaldım. Hemen tekrar almak zorunda mıyım?' },
      a:{ en:'Usually failed required courses should be repeated as soon as possible because they may block prerequisites. Ask your advisor how it affects next semester’s course plan.', tr:'Zorunlu kalınan dersler genelde en kısa sürede tekrar alınmalıdır çünkü ön koşulları engelleyebilir. Gelecek dönem planınızı nasıl etkilediğini advisorunuza sorun.' },
    },
    {
      category:'exams',
      tags:['exam date','midterm','final','schedule'],
      q:{ en:'Where can I confirm midterm or final exam dates?', tr:'Midterm veya final sınav tarihlerini nereden doğrulayabilirim?' },
      a:{ en:'Check the official course announcements and exam schedule first. If two exams clash or a date is missing, send your advisor the course codes and screenshots of the schedules.', tr:'Önce resmi ders duyurularını ve sınav programını kontrol edin. İki sınav çakışıyorsa veya tarih eksikse advisorunuza ders kodları ve program ekran görüntüleriyle yazın.' },
    },
    {
      category:'exams',
      tags:['exam clash','final clash','midterm clash'],
      q:{ en:'Two exams are at the same time. What should I do?', tr:'İki sınavım aynı saate denk geliyor. Ne yapmalıyım?' },
      a:{ en:'Do not wait until exam day. Send your advisor both course codes, exam dates, times, and screenshots. Your advisor can guide you to the correct department or exam office procedure.', tr:'Sınav gününü beklemeyin. Advisorunuza iki ders kodunu, sınav tarih/saatlerini ve ekran görüntülerini gönderin. Advisor sizi doğru bölüm veya sınav ofisi prosedürüne yönlendirebilir.' },
    },
    {
      category:'makeup',
      tags:['make-up','makeup exam','medical report'],
      q:{ en:'I missed an exam. How do I request a make-up exam?', tr:'Sınavı kaçırdım. Make-up sınavına nasıl başvururum?' },
      a:{ en:'Prepare valid documentation such as a medical report and contact the course instructor as soon as possible. Also notify your advisor if missing the exam may affect your semester plan.', tr:'Geçerli belgeyi, örneğin sağlık raporunu hazırlayın ve en kısa sürede ders hocasına yazın. Sınavı kaçırmanız dönem planınızı etkiliyorsa advisorunuza da bilgi verin.' },
    },
    {
      category:'makeup',
      tags:['resit','resit date','failed exam'],
      q:{ en:'When are make-up or resit exam dates announced?', tr:'Make-up veya resit sınav tarihleri ne zaman açıklanır?' },
      a:{ en:'Dates are usually announced by the course instructor, department, or official exam schedule. If you cannot find the date, ask your advisor where it is published for your department.', tr:'Tarihler genellikle ders hocası, bölüm veya resmi sınav programı tarafından duyurulur. Tarihi bulamıyorsanız bölümünüz için nereden yayınlandığını advisorunuza sorun.' },
    },
    {
      category:'graduation',
      tags:['graduation','graduation check','remaining courses'],
      q:{ en:'How can I check if I am ready to graduate?', tr:'Mezuniyete hazır olup olmadığımı nasıl kontrol edebilirim?' },
      a:{ en:'Compare your transcript with your curriculum checklist and list any remaining required, elective, internship, or project courses. Send this list to your advisor for confirmation before your final semester.', tr:'Transkriptinizi müfredat kontrol listenizle karşılaştırın ve kalan zorunlu, seçmeli, staj veya proje derslerini listeleyin. Son döneminizden önce bu listeyi onay için advisorunuza gönderin.' },
    },
    {
      category:'graduation',
      tags:['missing course','graduation blocked','remaining requirement'],
      q:{ en:'I discovered a missing course near graduation. What should I do?', tr:'Mezuniyete yakın eksik ders fark ettim. Ne yapmalıyım?' },
      a:{ en:'Contact your advisor immediately with the missing course code and your transcript. Your advisor can help you check whether it must be taken now, in summer, or in an extra semester.', tr:'Eksik ders kodu ve transkriptinizle hemen advisorunuza ulaşın. Advisor dersin şimdi, yaz okulunda veya ek dönemde alınıp alınamayacağını kontrol etmenize yardımcı olabilir.' },
    },
    {
      category:'graduation',
      tags:['internship','graduation project','capstone'],
      q:{ en:'Do internship or graduation project requirements affect my graduation?', tr:'Staj veya graduation project mezuniyetimi etkiler mi?' },
      a:{ en:'Yes. Non-course requirements can delay graduation if not completed or approved. Ask your advisor which internship, project, or capstone requirements are still pending.', tr:'Evet. Ders dışı gereklilikler tamamlanmadıysa veya onaylanmadıysa mezuniyet gecikebilir. Hangi staj, proje veya capstone gerekliliklerinin beklediğini advisorunuza sorun.' },
    },
    {
      category:'graduation',
      tags:['gpa','cgpa','graduation cgpa'],
      q:{ en:'Can low CGPA delay graduation?', tr:'Düşük CGPA mezuniyeti geciktirebilir mi?' },
      a:{ en:'It can, depending on university and department rules. Ask your advisor to review your CGPA, failed courses, and possible retake options before the final semester ends.', tr:'Üniversite ve bölüm kurallarına göre geciktirebilir. Final dönem bitmeden advisorunuzdan CGPA’inizi, başarısız dersleri ve olası tekrar seçeneklerini incelemesini isteyin.' },
    },
    {
      category:'graduation',
      tags:['final semester','last semester','course plan'],
      q:{ en:'I am in my final semester. What should I confirm with my advisor?', tr:'Son dönemimdeyim. Advisor ile neyi teyit etmeliyim?' },
      a:{ en:'Confirm remaining courses, elective type requirements, internship/project status, credit total, CGPA risk, and whether any course clashes could prevent completion.', tr:'Kalan dersleri, seçmeli türü gerekliliklerini, staj/proje durumunu, toplam krediyi, CGPA riskini ve mezuniyeti engelleyebilecek çakışmaları teyit edin.' },
    },
    {
      category:'extension',
      tags:['semester extension','extra semester','delay graduation'],
      q:{ en:'Will I need to extend my studies for one more semester?', tr:'Bir dönem daha uzatmam gerekir mi?' },
      a:{ en:'This depends on remaining required courses, prerequisites, failed courses, and whether those courses are offered next semester. Ask your advisor for a semester-by-semester completion plan.', tr:'Bu; kalan zorunlu derslere, ön koşullara, başarısız derslere ve bu derslerin gelecek dönem açılıp açılmayacağına bağlıdır. Advisorunuzdan dönem dönem bitirme planı isteyin.' },
    },
    {
      category:'extension',
      tags:['course not offered','extension','delayed course'],
      q:{ en:'A course I need is not offered this semester. Will this delay me?', tr:'Almam gereken ders bu dönem açılmıyor. Bu beni geciktirir mi?' },
      a:{ en:'It may delay you if the course is required or a prerequisite. Ask your advisor whether there is an equivalent course, summer option, or alternative plan approved by the department.', tr:'Ders zorunluysa veya ön koşulsa sizi geciktirebilir. Advisorunuza eşdeğer ders, yaz okulu seçeneği veya bölüm onaylı alternatif plan olup olmadığını sorun.' },
    },
    {
      category:'extension',
      tags:['failed prerequisite','sequence','extra year'],
      q:{ en:'I failed a prerequisite. How does it affect next semester?', tr:'Ön koşul dersinden kaldım. Gelecek dönemi nasıl etkiler?' },
      a:{ en:'A failed prerequisite may block one or more future courses and extend your study plan. Ask your advisor which courses are blocked and what the safest retake plan is.', tr:'Başarısız ön koşul bir veya daha fazla gelecek dersi engelleyebilir ve planınızı uzatabilir. Hangi derslerin bloklandığını ve en güvenli tekrar planını advisorunuza sorun.' },
    },
    {
      category:'extension',
      tags:['reduced load','part time','workload'],
      q:{ en:'Can I take fewer courses this semester without delaying graduation?', tr:'Bu dönem daha az ders alırsam mezuniyetim gecikir mi?' },
      a:{ en:'Maybe. Reduced load can be safer academically, but it may delay prerequisites or graduation. Ask your advisor to compare both options before you drop a course.', tr:'Olabilir. Daha az ders almak akademik olarak daha güvenli olabilir ama ön koşulları veya mezuniyeti geciktirebilir. Ders bırakmadan önce advisorunuzdan iki seçeneği karşılaştırmasını isteyin.' },
    },
    {
      category:'extension',
      tags:['academic warning','probation','study plan'],
      q:{ en:'I am on academic warning/probation. How should I choose courses?', tr:'Academic warning/probation durumundayım. Dersleri nasıl seçmeliyim?' },
      a:{ en:'Prioritize courses you can realistically pass and avoid overloaded timetables. Your advisor can help you create a recovery plan focused on GPA and prerequisite progress.', tr:'Gerçekçi şekilde geçebileceğiniz derslere öncelik verin ve aşırı yüklü programdan kaçının. Advisorunuz GPA toparlama ve ön koşul ilerlemesine odaklanan bir plan oluşturmanıza yardım edebilir.' },
    },
  ];

  /* ============================================================
     SECTION D — TRANSLATION HELPER
  ============================================================ */
  function t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;          // fallback: return the key itself
    return entry[STATE.lang] || entry.en;
  }

  /* ============================================================
     SECTION E — THEME & LANGUAGE CONTROLS
  ============================================================ */
  function setTheme(theme) {
    STATE.theme = theme;
    document.body.className = theme;
    render();
  }

  function toggleTheme() {
    setTheme(STATE.theme === 'light' ? 'dark' : 'light');
  }

  function setLang(lang) {
    STATE.lang = lang;
    render();
  }

  /* ============================================================
     SECTION F — ROUTER
     navigate(screen) changes the current screen and re-renders.
  ============================================================ */
  function getDemoUser(role) {
    const names = { student:'Ada Yılmaz', teacher:'Dr. Demir Kaya', admin:'Admin User' };
    return role && names[role] ? { name: names[role], role } : null;
  }

  function getRouteState(screen) {
    return {
      screen,
      authMode: STATE.authMode,
      loginRole: STATE.loginRole,
      userRole: STATE.user?.role || null,
    };
  }

  function navigate(screen, options = {}) {
    STATE.screen = screen;
    const routeState = getRouteState(screen);
    const url = `#${encodeURIComponent(screen)}`;
    if (options.replace) {
      history.replaceState(routeState, '', url);
    } else if (!options.skipHistory) {
      history.pushState(routeState, '', url);
    }
    render();
    /* Scroll back to top on navigation */
    window.scrollTo(0, 0);
  }

  window.addEventListener('popstate', (event) => {
    const routeState = event.state || {};
    const screenFromHash = decodeURIComponent(location.hash.replace(/^#/, ''));
    STATE.screen = routeState.screen || screenFromHash || 'login';
    STATE.authMode = routeState.authMode || STATE.authMode || 'login';
    STATE.loginRole = routeState.loginRole || STATE.loginRole || 'student';
    STATE.user = routeState.userRole ? getDemoUser(routeState.userRole) : null;
    render();
    window.scrollTo(0, 0);
  });

  /* ============================================================
     SECTION G — COMPONENT BUILDERS
     Each function returns an HTML string for a UI piece.
  ============================================================ */

  /* ── Topbar ─────────────────────────────────────────────────── */
  function buildTopbar() {
    const isDark = STATE.theme === 'dark';
    const user = STATE.user;
    /* Initials abbreviation for avatar */
    const initials = user ? user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() : '??';
    const avClass  = user ? `av-${user.role}` : 'av-student';

    return `
    <nav class="topbar" role="banner">
      <div class="topbar-logo">
        <img class="brand-logo-sm" src="assets/ciu-logo.png" alt="CIU logo" />
        ${t('appName')}
      </div>
      <div class="topbar-right">
        <!-- Language toggle -->
        <button class="ctrl-btn ${STATE.lang==='en'?'active':''}" onclick="setLang('en')">EN</button>
        <button class="ctrl-btn ${STATE.lang==='tr'?'active':''}" onclick="setLang('tr')">TR</button>

        <!-- Dark / Light mode toggle -->
        <button class="ctrl-btn" onclick="toggleTheme()" title="${isDark ? t('lightMode') : t('darkMode')}">
          ${isDark ? '☀ '+t('lightMode') : '☾ '+t('darkMode')}
        </button>

        ${user ? `
          <!-- Logged-in user avatar & logout -->
          <div class="avatar ${avClass}" title="${user.name}">${initials}</div>
          <button class="ctrl-btn" onclick="doLogout()">${t('logout')}</button>
        ` : ''}
      </div>
    </nav>`;
  }

  /* ── Sidebar ─────────────────────────────────────────────────── */
  function buildSidebar(items) {
    /* items = array of { section?, label, screen, badge? } */
    let html = '<nav class="sidebar" role="navigation" aria-label="Main navigation">';
    for (const item of items) {
      if (item.section) {
        html += `<div class="sidebar-section">${item.section}</div>`;
      } else {
        const isActive = STATE.screen === item.screen;
        const badge = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
        const featured = item.featured ? 'featured' : '';
        html += `
          <div class="nav-item ${featured} ${isActive?'active':''}" onclick="navigate('${item.screen}')" role="menuitem">
            <span class="nav-dot"></span>
            ${item.label}
            ${badge}
          </div>`;
      }
    }
    html += '</nav>';
    return html;
  }

  function buildStudentSidebar() {
    return buildSidebar([
      { section: t('roleStudent') },
      { label: t('navMyInquiries'), screen:'student-portal' },
      { label: t('navMyTickets'),   screen:'student-tickets' },
      { label: t('navMeetings'),    screen:'student-meetings' },
      { label: '❓ ' + t('navFAQ'),  screen:'faq-browse', featured:true },
    ]);
  }

  function buildTeacherSidebar() {
    return buildSidebar([
      { section: t('roleTeacher') },
      { label: t('navInbox'),      screen:'teacher-inbox', badge:'4' },
      { label: t('navTickets'),    screen:'ticket-thread' },
      { label: t('navMeetings'),   screen:'teacher-meetings' },
      { label: t('navOfficeHours'),screen:'teacher-office-hours' },
      { label: t('navFAQMgr'),     screen:'teacher-faq' },
    ]);
  }

  function buildAdminSidebar() {
    return buildSidebar([
      { section: t('roleAdmin') },
      { label: t('navAnalytics'), screen:'analytics' },
      { label: t('navFAQMgr'),    screen:'admin-faq' },
      { label: t('navUsers'),     screen:'admin-users' },
    ]);
  }

  function buildFAQCallout() {
    return `
    <div class="faq-cta">
      <div>
        <div class="faq-cta-title">${STATE.lang==='tr'?'Önce SSS’ye bak':'Check the FAQ first'}</div>
        <div class="faq-cta-body">${STATE.lang==='tr'?'Sık sorulan sorulara hızlıca bakabilir, birçok konuyu öğretmene yazmadan çözebilirsin.':'Browse common answers before sending a new inquiry.'}</div>
      </div>
      <button class="btn btn-sm" onclick="navigate('faq-browse')">${t('navFAQ')}</button>
    </div>`;
  }

  /* ── Intro banner ────────────────────────────────────────────── */
  function buildIntroBanner(titleKey, bodyKey) {
    return `
    <div class="intro-banner" role="note">
      <div class="intro-banner-icon">i</div>
      <div>
        <div class="intro-banner-title">${t(titleKey)}</div>
        <div class="intro-banner-body">${t(bodyKey)}</div>
      </div>
    </div>`;
  }

  /* ── Teacher card grid ───────────────────────────────────────── */
  function buildTeacherGrid(onSelect, selectedId) {
    const cards = TEACHERS.map(tc => {
      const isSelected = selectedId === tc.id;
      const hours = tc.officeHours.office.slice(0,2).join(', ') + '…';
      return `
      <div class="teacher-card ${isSelected?'selected':''}"
           onclick="${onSelect}('${tc.id}')"
           role="button"
           aria-pressed="${isSelected}"
           aria-label="Select ${tc.name}">
        <div class="teacher-photo" style="background:${tc.color}">
          ${tc.name.split(' ').slice(-2).map(w=>w[0]).join('')}
          <span class="teacher-photo-badge ${tc.online?'online':'offline'}" title="${tc.online?t('online'):t('offline')}"></span>
        </div>
        <div class="teacher-name">${tc.name}</div>
        <div class="teacher-dept">${tc.dept}</div>
        <div class="teacher-hours">${tc.courses.join(', ')}</div>
      </div>`;
    }).join('');
    return `<div class="teacher-grid">${cards}</div>`;
  }

  /* ── Chatbot floating widget ─────────────────────────────────── */
  function buildChatbot() {
    /* Only show for student role */
    if (!STATE.user || STATE.user.role !== 'student') return '';

    return `
    <!-- Floating chatbot FAB button -->
    <button class="chatbot-fab" onclick="toggleChat()" aria-label="${t('chatbotTitle')}">
      💬
      <span class="chatbot-badge" id="chat-badge">3</span>
    </button>

    <!-- Chatbot slide-up panel -->
    <div class="chatbot-panel ${STATE.chatOpen?'open':''}" id="chatbot-panel" role="dialog" aria-label="${t('chatbotTitle')}">
      <div class="chatbot-header">
        <div>
          <div class="chatbot-header-title">${t('chatbotTitle')}</div>
          <div class="chatbot-header-sub">${t('chatbotSub')}</div>
        </div>
        <button class="chatbot-close" onclick="toggleChat()" aria-label="${t('close')}">✕</button>
      </div>

      <div class="chatbot-body" id="chatbot-body">
        <!-- Initial bot greeting message -->
        <div class="chat-msg bot">
          <div style="width:22px;height:22px;border-radius:50%;background:var(--info-bg);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--info-tx)">AI</div>
          <div class="chat-bubble bot-bubble">${t('chatbotGreeting')}</div>
        </div>
        <!-- Quick-reply suggestion chips -->
        <div class="chat-chips">
          <button class="chat-chip" onclick="chatSend('${t('chatbotChip1')}')">${t('chatbotChip1')}</button>
          <button class="chat-chip" onclick="chatSend('${t('chatbotChip2')}')">${t('chatbotChip2')}</button>
          <button class="chat-chip" onclick="chatSend('${t('chatbotChip3')}')">${t('chatbotChip3')}</button>
        </div>
      </div>

      <!-- "Still need help?" footer with link to inquiry form -->
      <div style="border-top:0.5px solid var(--border);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;background:var(--bg-surface);">
        <span style="font-size:11px;color:var(--tx-second)">${t('stillNeedHelp')}</span>
        <button class="btn btn-sm" onclick="navigate('new-inquiry')">${t('newInquiry')}</button>
      </div>

      <div class="chatbot-footer">
        <input class="chatbot-input" id="chat-input" placeholder="${t('typeAQuestion')}"
               onkeydown="if(event.key==='Enter')chatSendFromInput()" />
        <button class="chatbot-send" onclick="chatSendFromInput()" aria-label="${t('submit')}">➤</button>
      </div>
    </div>`;
  }

  /* ============================================================
     SECTION H — SCREEN RENDERERS
     Each function returns the full HTML for one screen.
  ============================================================ */

  /* ── H1. Login screen ──────────────────────────────────────── */
  function screenLogin() {
    const roles = ['student','teacher','admin'];
    const roleTabs = roles.map(r => `
      <button class="role-tab ${STATE.loginRole===r?'active':''}"
              onclick="STATE.loginRole='${r}';render()">
        ${ r==='student' ? '🎓 '+t('roleStudent') : r==='teacher' ? '📚 '+t('roleTeacher') : '⚙ '+t('roleAdmin') }
      </button>`).join('');

    return `
    ${buildTopbar()}
    <main class="auth-page">
      <div class="auth-card">
        <div class="auth-logo">
          <img class="brand-logo-lg" src="assets/ciu-logo.png" alt="CIU logo" />
          ${t('appName')}
        </div>
        <div class="auth-tagline">${t('appTagline')}</div>

        <!-- Page intro banner -->
        ${buildIntroBanner('loginIntroTitle','loginIntroBody')}

        <!-- Role selection tabs -->
        <div class="role-tabs" role="tablist">${roleTabs}</div>

        <!-- Login form fields -->
        <div class="form-group">
          <label class="form-label" for="login-email">${t('email')}</label>
          <input class="form-input" id="login-email" type="email" placeholder="student@ciu.edu.tr" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="login-pass">${t('password')}</label>
          <input class="form-input" id="login-pass" type="password" placeholder="••••••••" required />
        </div>

        <!-- Submit — navigates to the appropriate dashboard -->
        <button class="btn btn-primary" style="width:100%;padding:11px"
                onclick="doLogin()">
          ${t('login')}
        </button>

        <div class="auth-switch">
          ${t('noAccount')} <a onclick="STATE.authMode='register';render()">${t('register')}</a>
        </div>
      </div>
    </main>`;
  }

  /* ── H2. Register screen ───────────────────────────────────── */
  function screenRegister() {
    const roles = ['student','teacher','admin'];
    const roleTabs = roles.map(r => `
      <button class="role-tab ${STATE.loginRole===r?'active':''}"
              onclick="STATE.loginRole='${r}';render()">
        ${ r==='student' ? '🎓 '+t('roleStudent') : r==='teacher' ? '📚 '+t('roleTeacher') : '⚙ '+t('roleAdmin') }
      </button>`).join('');

    return `
    ${buildTopbar()}
    <main class="auth-page">
      <div class="auth-card">
        <div class="auth-logo">
          <img class="brand-logo-lg" src="assets/ciu-logo.png" alt="CIU logo" />
          ${t('appName')}
        </div>
        <div class="auth-tagline">${t('appTagline')}</div>

        ${buildIntroBanner('registerIntroTitle','registerIntroBody')}

        <div class="role-tabs" role="tablist">${roleTabs}</div>

        <!-- Common fields -->
        <div class="form-group">
          <label class="form-label" for="reg-name">${t('fullName')}</label>
          <input class="form-input" id="reg-name" type="text" placeholder="Ada Yılmaz" />
        </div>
        <div class="form-group">
          <label class="form-label" for="reg-email">${t('email')}</label>
          <input class="form-input" id="reg-email" type="email" placeholder="student@ciu.edu.tr" required />
        </div>

        <!-- Student-specific field -->
        ${STATE.loginRole === 'student' ? `
        <div class="form-group">
          <label class="form-label" for="reg-sid">${t('studentId')}</label>
          <input class="form-input" id="reg-sid" type="text" placeholder="20210342" />
        </div>` : ''}

        <!-- Teacher-specific field -->
        ${STATE.loginRole === 'teacher' ? `
        <div class="form-group">
          <label class="form-label" for="reg-dept">${t('department')}</label>
          <input class="form-input" id="reg-dept" type="text" placeholder="Computer Science" />
        </div>` : ''}

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="reg-pass">${t('password')}</label>
            <input class="form-input" id="reg-pass" type="password" placeholder="••••••••" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="reg-conf">${t('confirmPassword')}</label>
            <input class="form-input" id="reg-conf" type="password" placeholder="••••••••" required />
          </div>
        </div>

        <button class="btn btn-primary" style="width:100%;padding:11px"
                onclick="doLogin()">
          ${t('register')}
        </button>
        <div class="auth-switch">
          ${t('hasAccount')} <a onclick="STATE.authMode='login';render()">${t('login')}</a>
        </div>
      </div>
    </main>`;
  }

  /* ── H3. Student: my inquiries ─────────────────────────────── */
  function screenStudentPortal() {
    const sidebar = buildStudentSidebar();

    /* Demo inquiries */
    const inquiries = [
      { title: t('lang')==='tr'?'3 Nisan devamsızlık':'Attendance absent on 3 April', cat:'catAttendance', course:'CS301', meta:'#INQ-2041 · 14 min ago', status:'pill-new', statusLabel: t('awaitingTeacher'), screen:'triage-view' },
      { title: t('lang')==='tr'?'Final sınavı CS302 ile çakışıyor':'Final exam conflicts with CS302', cat:'catTimetable', course:'CS302', meta:'#TKT-1041 · 5h ago', status:'pill-prog', statusLabel: t('ticketOpen'), screen:'ticket-thread' },
      { title: t('lang')==='tr'?'Ödev 2 notlandırma':'Assignment 2 grading question', cat:'catGrading', course:'CS301', meta:'#INQ-1988 · 1d ago', status:'pill-done', statusLabel: t('answeredByTeacher'), screen:'student-portal' },
      { title: t('lang')==='tr'?'Telafi lab talebi':'Lab makeup session request', cat:'catCourse', course:'CS301', meta:'#INQ-1942 · 3d ago', status:'pill-done', statusLabel: t('resolvedByFAQ'), screen:'student-portal' },
    ];

    const catLabel = { catAttendance:t('catAttendance'), catTimetable:t('catTimetable'), catGrading:t('catGrading'), catCourse:t('catCourse') };
    const visibleInquiries = inquiries.filter(inq => {
      const isResolved = inq.status === 'pill-done';
      const filterStatus = isResolved ? 'resolved' : 'open';
      return STATE.inquiryFilter === 'all' || STATE.inquiryFilter === filterStatus;
    });

    const cards = visibleInquiries.map(inq => `
      <div class="inq-card" onclick="navigate('${inq.screen}')" role="button" aria-label="${inq.title}">
        <div>
          <div class="inq-card-title">${inq.title}</div>
          <div class="inq-card-meta">${inq.meta} · ${catLabel[inq.cat]||''} · ${inq.course}</div>
        </div>
        <span class="pill ${inq.status}">${inq.statusLabel}</span>
      </div>`).join('') || `
      <div class="card">
        <div class="inq-card-title">${STATE.lang==='tr'?'Bu filtrede talep yok.':'No inquiries in this filter.'}</div>
        <div class="inq-card-meta">${STATE.lang==='tr'?'Başka bir filtre seçebilir veya yeni talep oluşturabilirsiniz.':'Choose another filter or create a new inquiry.'}</div>
      </div>`;

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildFAQCallout()}
        ${buildIntroBanner('studentPortalTitle','studentPortalIntro')}
        <div class="page-header">
          <div>
            <div class="page-title">${t('studentPortalTitle')}</div>
            <div class="page-subtitle">${STATE.user?.name || 'Student'}</div>
          </div>
          <div class="btn-row">
            <button class="btn btn-sm ${STATE.inquiryFilter==='all'?'btn-primary':''}" onclick="STATE.inquiryFilter='all';render()">${t('all')}</button>
            <button class="btn btn-sm ${STATE.inquiryFilter==='open'?'btn-primary':''}" onclick="STATE.inquiryFilter='open';render()">${t('open')}</button>
            <button class="btn btn-sm ${STATE.inquiryFilter==='resolved'?'btn-primary':''}" onclick="STATE.inquiryFilter='resolved';render()">${t('resolved')}</button>
            <button class="btn btn-primary" onclick="navigate('new-inquiry')">${t('newInquiry')}</button>
          </div>
        </div>
        ${cards}
      </main>
    </div>
    ${buildChatbot()}`;
  }

  /* ── H4. Student: new inquiry form ────────────────────────── */
  function screenNewInquiry() {
    const cats = ['catAttendance','catTimetable','catCourse','catGrading','catOther'];
    const chipHTML = cats.map(c => `
      <span class="chip ${STATE.selectedCategory===c?'selected':''}"
            onclick="STATE.selectedCategory='${c}';render()" role="button">
        ${t(c)}
      </span>`).join('');

    const courseOptions = COURSES.map(c=>`<option>${c}</option>`).join('');

    const sidebar = buildStudentSidebar();

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildFAQCallout()}
        ${buildIntroBanner('newInquiryTitle','newInquiryIntro')}
        <div class="page-header">
          <div class="page-title">${t('newInquiryTitle')}</div>
          <button class="btn" onclick="navigate('student-portal')">${t('back')}</button>
        </div>

        <!-- Subject line -->
        <div class="form-group">
          <label class="form-label" for="inq-subject">${t('whatIsAbout')}</label>
          <input class="form-input" id="inq-subject" type="text" placeholder="e.g. Attendance on 3 April marked wrong" />
        </div>

        <!-- AI type suggestion -->
        <div class="ai-hint">
          <span>✦</span>
          ${t('aiTypeSuggestion')}: <strong>${t('catAttendance')}</strong> — ${t('aiSuggestSuffix')}
        </div>

        <!-- Category chips -->
        <div class="form-group">
          <label class="form-label">${t('selectCategory')}</label>
          <div class="chip-group">${chipHTML}</div>
        </div>

        <!-- Teacher selection -->
        <div class="form-group">
          <label class="form-label">${t('selectTeacher')}</label>
          ${buildTeacherGrid('selectTeacher', STATE.selectedTeacher)}
        </div>

        <!-- Course + date in a 2-column grid -->
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="inq-course">${t('selectCourse')}</label>
            <select class="form-select" id="inq-course">${courseOptions}</select>
          </div>
          <div class="form-group">
            <label class="form-label" for="inq-date">${t('dateOfIssue')}</label>
            <input class="form-input" id="inq-date" type="date" />
          </div>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label class="form-label" for="inq-desc">${t('describeIssue')}</label>
          <textarea class="form-textarea" id="inq-desc" rows="4"
                    placeholder="Describe the issue clearly — date, what happened, what evidence you have…"></textarea>
        </div>

        <!-- Attachment -->
        <div class="form-group">
          <label class="form-label" for="inq-file">${t('attachment')}</label>
          <input class="form-input" id="inq-file" type="file" />
        </div>

        <!-- Duplicate warning (demo — always shown) -->
        <div class="ai-warn">
          ⚠ ${t('dupWarn')}
        </div>

        <div class="btn-row">
          <button class="btn" onclick="navigate('student-portal')">${t('cancel')}</button>
          <button class="btn btn-primary" onclick="navigate('student-portal')">${t('sendToTeacher')}</button>
        </div>
      </main>
    </div>
    ${buildChatbot()}`;
  }

  /* ── H5. Student: meeting requests ────────────────────────── */
  function screenStudentMeetings() {
    const sidebar = buildStudentSidebar();

    /* Notification banners for demo meeting statuses */
    const notifications = `
      <div class="notif-banner notif-approved">
        ✓ ${t('meetingApproved')} — Dr. Demir Kaya · Tue 14:00 · CS301
        <span style="margin-left:auto;font-size:11px;opacity:.8">${t('meetingApprovedDetail')}</span>
      </div>
      <div class="notif-banner notif-rejected">
        ✕ ${t('meetingRejected')} — Dr. Mert Şahin · Thu 11:00
        <span style="margin-left:auto;font-size:11px;opacity:.8">${t('meetingRejectedDetail')}</span>
      </div>`;

    /* Meeting type selector */
    const typeRow = `
      <div class="meeting-type-row">
        <button class="meeting-type-btn ${STATE.meetingType==='office'?'selected':''}"
                onclick="STATE.meetingType='office';render()">
          🏢 ${t('inPerson')}
        </button>
        <button class="meeting-type-btn ${STATE.meetingType==='online'?'selected':''}"
                onclick="STATE.meetingType='online';render()">
          💻 ${t('onlineMeeting')}
        </button>
      </div>`;

    /* Office hours slots for selected teacher */
    const teacher = TEACHERS.find(tc => tc.id === STATE.selectedTeacher) || TEACHERS[0];
    const slots   = teacher.officeHours[STATE.meetingType] || [];
    const taken   = TAKEN_SLOTS[teacher.id] || [];

    const slotHTML = slots.map(s => {
      const isTaken    = taken.includes(s);
      const isSelected = STATE.selectedSlot === s;
      return `
        <div class="hour-slot ${isTaken?'taken':''} ${isSelected&&!isTaken?'selected':''}"
             onclick="${isTaken?'':  `STATE.selectedSlot='${s}';render()`}"
             title="${isTaken?t('slotTaken'):''}">
          ${s}${isTaken ? '<br><small>'+t('slotTaken')+'</small>' : ''}
        </div>`;
    }).join('');

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildFAQCallout()}
        ${buildIntroBanner('meetingReqTitle','meetingReqIntro')}

        <!-- Past meeting feedback notifications -->
        <div class="mb-20">${notifications}</div>

        <div class="page-title mb-16">${t('meetingReqTitle')}</div>

        <!-- Teacher selection -->
        <div class="form-group">
          <label class="form-label">${t('selectTeacher')}</label>
          ${buildTeacherGrid('selectTeacher', STATE.selectedTeacher || TEACHERS[0].id)}
        </div>

        <!-- Office vs Online toggle -->
        <div class="form-group">
          <label class="form-label">${t('meetingType')}</label>
          ${typeRow}
        </div>

        <!-- Available time slots -->
        <div class="form-group">
          <label class="form-label">${t('officeHours')}</label>
          <div class="office-hours-grid">${slotHTML}</div>
        </div>

        <!-- Optional note to teacher -->
        <div class="form-group">
          <label class="form-label" for="mtg-note">${t('addNote')}</label>
          <textarea class="form-textarea" id="mtg-note" rows="3"
                    placeholder="e.g. My ticket #1041 was not resolved after 3 exchanges."></textarea>
        </div>

        <div class="btn-row">
          <button class="btn" onclick="navigate('student-tickets')">${t('back')}</button>
          <button class="btn btn-primary" onclick="navigate('student-meetings')">${t('sendRequest')}</button>
        </div>
      </main>
    </div>
    ${buildChatbot()}`;
  }

  /* ── H6. Student: tickets ──────────────────────────────────── */
  function screenStudentTickets() {
    const sidebar = buildStudentSidebar();
    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildFAQCallout()}
        <div class="page-header">
          <div class="page-title">${t('navMyTickets')}</div>
          <button class="btn btn-primary" onclick="navigate('student-meetings')">${t('meetingReqTitle')}</button>
        </div>
        <!-- Single demo ticket -->
        <div class="inq-card" onclick="navigate('ticket-thread')">
          <div>
            <div class="inq-card-title">${STATE.lang==='tr'?'Final sınav tarihi CS302 ile çakışıyor':'Final exam date conflicts with CS302'}</div>
            <div class="inq-card-meta">#TKT-1041 · CS302 · ${t('openedBy')||'Opened'} 5h ago</div>
          </div>
          <span class="pill pill-prog">${t('statusProg')||'In progress'}</span>
        </div>
      </main>
    </div>
    ${buildChatbot()}`;
  }

  /* ── H7. Teacher: inquiry inbox ────────────────────────────── */
  function screenTeacherInbox() {
    const sidebar = buildTeacherSidebar();

    /* Demo inquiry rows */
    const rows = [
      { title: STATE.lang==='tr'?'3 Nis devamsızlık':'Attendance absent 3 Apr', student:'A. Yılmaz', cat:'pill-att', catLabel:t('catAttendance'), course:'CS301', status:'pill-new', sLabel:t('statusNew')||'New', ago:'14m', hl:true },
      { title: STATE.lang==='tr'?'Sınav tarihi çakışıyor':'Exam date clash CS302', student:'B. Çelik',  cat:'pill-tt', catLabel:t('catTimetable'), course:'CS302', status:'pill-open', sLabel:t('open'), ago:'2h', hl:false },
      { title: STATE.lang==='tr'?'Ödev 2 not sorgusu':'Assignment 2 grade query', student:'C. Arslan', cat:'pill-grade', catLabel:t('catGrading'), course:'CS301', status:'pill-open', sLabel:t('open'), ago:'5h', hl:false },
      { title: STATE.lang==='tr'?'Lab erişim sorunu':'Lab access issue Friday', student:'D. Kaya',   cat:'pill-att', catLabel:t('catAttendance'), course:'CS301', status:'pill-open', sLabel:t('open'), ago:'1d', hl:false },
    ];

    const courseOptions = ['all', ...Array.from(new Set(rows.map(r => r.course)))];
    const filteredRows = rows.filter(r => {
      const courseMatches = STATE.teacherCourseFilter === 'all' || r.course === STATE.teacherCourseFilter;
      const unreadMatches = !STATE.teacherUnreadOnly || r.hl;
      return courseMatches && unreadMatches;
    });

    const tableRows = filteredRows.map(r => `
      <tr class="${r.hl?'highlight':''}" onclick="navigate('triage-view')" style="cursor:pointer">
        <td style="font-weight:${r.hl?600:400}">${r.title}</td>
        <td>${r.student}</td>
        <td><span class="pill ${r.cat}">${r.catLabel}</span></td>
        <td style="color:var(--tx-hint)">${r.course}</td>
        <td><span class="pill ${r.status}">${r.sLabel}</span></td>
        <td style="color:var(--tx-hint)">${r.ago}</td>
      </tr>`).join('') || `
      <tr>
        <td colspan="6" style="color:var(--tx-hint);text-align:center;padding:18px">
          ${STATE.lang==='tr'?'Bu filtrede talep yok.':'No inquiries match this filter.'}
        </td>
      </tr>`;

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildIntroBanner('teacherInboxTitle','teacherInboxIntro')}
        <div class="page-header">
          <div class="page-title">${t('incomingInquiries')}</div>
          <div class="btn-row">
            <select class="form-select" style="width:auto;padding:5px 28px 5px 10px;font-size:12px"
                    onchange="STATE.teacherCourseFilter=this.value;render()">
              ${courseOptions.map(course => `
                <option value="${course}" ${STATE.teacherCourseFilter===course?'selected':''}>
                  ${course === 'all' ? t('allCourses') : course}
                </option>`).join('')}
            </select>
            <button class="btn btn-sm ${STATE.teacherUnreadOnly?'btn-primary':''}"
                    onclick="STATE.teacherUnreadOnly=!STATE.teacherUnreadOnly;render()">
              ${t('unreadOnly')}
            </button>
          </div>
        </div>

        <!-- Inquiry table -->
        <div class="card" style="padding:0;overflow:hidden">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width:32%">${t('subjectCol')||'Subject'}</th>
                <th style="width:16%">${t('studentCol')||'Student'}</th>
                <th style="width:16%">${t('categoryCol')||'Category'}</th>
                <th style="width:12%">${t('courseCol')||'Course'}</th>
                <th style="width:12%">${t('statusCol')||'Status'}</th>
                <th style="width:12%">${t('timeCol')||'Time'}</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
      </main>
    </div>`;
  }

  /* ── H8. Teacher: triage / inquiry detail ───────────────────── */
  function screenTriageView() {
    const sidebar = buildTeacherSidebar();

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildIntroBanner('teacherInboxTitle','triageIntro')}

        <!-- Breadcrumb -->
        <div style="font-size:11px;color:var(--tx-hint);margin-bottom:8px;cursor:pointer" onclick="navigate('teacher-inbox')">
          ← ${t('navInbox')} › INQ-2041
        </div>

        <div class="page-title mb-16">
          ${STATE.lang==='tr'?'3 Nisan devamsızlık olarak işaretlendi':'Attendance marked absent on 3 April'}
        </div>

        <!-- Status row -->
        <div class="flex-center gap-8 mb-20" style="flex-wrap:wrap">
          <span class="pill pill-new">${t('statusNew')||'New'}</span>
          <span style="font-size:12px;color:var(--tx-second)">A. Yılmaz</span>
          <span class="pill pill-att">${t('catAttendance')}</span>
          <span style="font-size:12px;color:var(--tx-hint)">CS301 · 14 min ago</span>
        </div>

        <div class="two-col-layout">
          <!-- Left: transcript, message, AI summary, reply, actions -->
          <div>
            <!-- Chatbot transcript section -->
            <div class="section-label">${t('chatTranscript')}</div>
            <div class="transcript mb-16">
              <div class="transcript-row">
                <span class="t-who t-bot">Bot</span>
                <span class="t-text">${t('chatbotGreeting')}</span>
              </div>
              <div class="transcript-row">
                <span class="t-who t-stu">${STATE.lang==='tr'?'Öğrenci':'Student'}</span>
                <span class="t-text">${STATE.lang==='tr'?'3 Nisan devam durumum yanlış.':'My attendance on 3 April is wrong.'}</span>
              </div>
              <div class="transcript-row">
                <span class="t-who t-bot">Bot</span>
                <span class="t-text">${t('chatbotNoMatch')}</span>
              </div>
            </div>

            <!-- Student's full message -->
            <div class="section-label">${t('studentMessage')}</div>
            <div class="card mb-16">
              <p style="font-size:13px;line-height:1.6;color:var(--tx-primary)">
                ${STATE.lang==='tr'
                  ? 'CS301 lab dersinin 3 Nisan Çarşamba günü hazır bulundum. Sistem yokmuşum gibi gösteriyor. Bina giriş kaydım ekte kanıt olarak mevcuttur.'
                  : 'I was present in the CS301 lab session on Wednesday 3 April. The system shows absent. I have the building entry log attached as proof.'}
              </p>
            </div>

            <!-- AI summary highlight -->
            <div class="ai-hint mb-16">
              <strong>✦ ${t('aiSummary')}:</strong>
              ${STATE.lang==='tr'
                ? 'Öğrenci 3 Nis lab dersinde bulunduğunu belirtiyor. Giriş kaydı kanıt olarak mevcut. Benzer vaka: B. Çelik — aynı tarih. Olası sistem hatası.'
                : 'Student claims presence on 3 Apr lab. Entry log attached as evidence. Similar case: B. Çelik, same date — possible system error.'}
            </div>

            <!-- Reply textarea -->
            <div class="section-label">${t('yourReply')}</div>
            <textarea class="form-textarea mb-10" placeholder="${t('replyPlaceholder')}"></textarea>
            <div class="btn-row mb-20">
              <button class="btn btn-sm">${t('cannedReply')}</button>
              <button class="btn btn-sm">${t('requestMoreInfo')}</button>
            </div>

            <!-- THREE-ACTION DECISION PANEL (core feature) -->
            <div class="section-label">${t('chooseAction')}</div>
            <div class="action-grid">
              <!-- Green: resolve here -->
              <div class="action-card green" onclick="navigate('teacher-inbox')">
                <div class="action-card-icon">✓</div>
                <div class="action-card-title">${t('actResolve')}</div>
                <div class="action-card-desc">${t('actResolveDesc')}</div>
              </div>
              <!-- Amber: escalate to ticket -->
              <div class="action-card amber" onclick="navigate('ticket-thread')">
                <div class="action-card-icon">↑</div>
                <div class="action-card-title">${t('actEscalate')}</div>
                <div class="action-card-desc">${t('actEscalateDesc')}</div>
              </div>
              <!-- Red: schedule meeting (last resort) -->
              <div class="action-card red" onclick="navigate('teacher-meetings')">
                <div class="action-card-icon">📅</div>
                <div class="action-card-title">${t('actMeeting')}</div>
                <div class="action-card-desc">${t('actMeetingDesc')}</div>
              </div>
            </div>
          </div>

          <!-- Right: student info sidebar -->
          <aside>
            <div class="card">
              <div class="section-label">${t('studentInfo')}</div>
              ${[
                ['Name','A. Yılmaz'],
                ['ID','20210342'],
                ['Course','CS301'],
                ['Grade','B+'],
                [t('attendance')||'Attendance','<span style="color:var(--warn-tx)">74%</span>'],
                [t('pastInqs')||'Past inqs.','0'],
              ].map(([k,v])=>`
                <div class="flex-between" style="margin-bottom:8px;font-size:12px">
                  <span style="color:var(--tx-second)">${k}</span>
                  <span style="font-weight:500">${v}</span>
                </div>`).join('')}

              <div class="divider"></div>

              <div class="section-label">${t('similarCases')}</div>
              <div style="font-size:12px;color:var(--info-tx);cursor:pointer;margin-bottom:4px">
                › B. Çelik — same date
              </div>
              <div style="font-size:12px;color:var(--info-tx);cursor:pointer">
                › INQ-1988 — 2 wks ago
              </div>

              <div class="ai-warn" style="margin-top:12px">
                ${STATE.lang==='tr'?'3 Nis\'te 2 öğrenci devam hatası bildirdi. Sistem sorunu olabilir.':'2 students reported errors on 3 Apr. Possible system issue.'}
              </div>

              <div class="divider"></div>
              <div class="section-label">${t('attachment')}</div>
              <div style="font-size:12px;color:var(--info-tx);cursor:pointer">📎 entry_log_03apr.pdf</div>
            </div>
          </aside>
        </div>
      </main>
    </div>`;
  }

  /* ── H9. Ticket thread (teacher + student) ─────────────────── */
  function screenTicketThread() {
    const isTeacher = STATE.user?.role === 'teacher';
    const sidebar = isTeacher ? buildTeacherSidebar() : buildStudentSidebar();

    /* Demo thread messages */
    const msgs = [
      { who: 'student', initials:'BC', name:'B. Çelik (student)', ago:'5h ago',
        text: STATE.lang==='tr'
          ? '14 Haziran CS301 finalim CS302 sınavımla aynı saatte. İkisine birden giremiyorum. Lütfen bilgi verin.'
          : 'My CS301 final on 14 June is at the same time as my CS302 exam. I cannot attend both. Please advise.' },
      { who: 'teacher', initials:'DK', name:'Dr. Kaya', ago:'3h ago',
        text: STATE.lang==='tr'
          ? 'Teşekkürler. Programı kontrol ettim — her ikisi de 10:00\'da. CS301 oturumu için saat değişikliği talep etmek üzere kayıt ofisiyle iletişime geçiyorum. 24 saat içinde bilgi vereceğim.'
          : "Thank you. I've checked — both are at 10:00. I'm contacting the registrar to request a time change for CS301. I'll update you within 24h." },
      { who: 'student', initials:'BC', name:'B. Çelik', ago:'2h ago',
        text: STATE.lang==='tr'?'Teşekkür ederim Dr. Kaya, yanıtınızı bekliyorum.':'Thank you Dr. Kaya, waiting for your update.' },
    ];

    const threadHTML = msgs.map(m => {
      const avClass = m.who === 'teacher' ? 'av-teacher' : 'av-student';
      return `
      <div class="thread-msg">
        <div class="avatar ${avClass}" style="flex-shrink:0">${m.initials}</div>
        <div style="flex:1">
          <div class="thread-name">${m.name} · ${m.ago}</div>
          <div class="thread-bubble">${m.text}</div>
        </div>
      </div>`;
    }).join('');

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${!isTeacher ? buildFAQCallout() : ''}
        ${buildIntroBanner('navTickets','ticketThreadIntro')}

        <div style="font-size:11px;color:var(--tx-hint);margin-bottom:8px;cursor:pointer"
             onclick="navigate(${isTeacher?`'teacher-inbox'`:`'student-tickets'`})">
          ← ${t('navTickets')} › TKT-1041
        </div>

        <div class="page-header">
          <div>
            <div class="page-title">${STATE.lang==='tr'?'Final sınav tarihi CS302 ile çakışıyor':'Final exam date conflicts with CS302'}</div>
            <div class="flex-center gap-8" style="margin-top:4px;flex-wrap:wrap">
              <span class="pill pill-prog">${t('pending')}</span>
              <span style="font-size:12px;color:var(--tx-second)">B. Çelik</span>
              <span class="pill pill-tt">${t('catTimetable')}</span>
              <span style="font-size:12px;color:var(--tx-hint)">CS302</span>
            </div>
          </div>
          ${isTeacher ? `<button class="btn btn-sm">${t('closeTicket')}</button>` : ''}
        </div>

        <!-- Auto-fill note -->
        <div class="ai-hint mb-16">${t('autoFilledNote')}</div>

        <!-- Conversation thread -->
        <div class="section-label">${t('convThread')}</div>
        <div class="mb-20">${threadHTML}</div>

        <!-- Reply box -->
        <div class="section-label">${t('yourReply')}</div>
        <textarea class="form-textarea mb-10" placeholder="${t('replyPlaceholder')}"></textarea>
        <div class="btn-row mb-20">
          ${isTeacher ? `<button class="btn btn-sm">${t('cannedReply')}</button>` : ''}
          <button class="btn btn-primary">${t('submit')}</button>
        </div>

        <!-- Escalation to meeting — shown when ticket not resolved -->
        <div class="divider"></div>
        <div class="section-label">${t('stillUnresolved')}</div>
        <div class="action-card red" style="display:flex;align-items:center;gap:12px;padding:14px 16px;text-align:left"
             onclick="navigate(${isTeacher?`'teacher-meetings'`:`'student-meetings'`})">
          <div class="action-card-icon" style="flex-shrink:0">📅</div>
          <div>
            <div class="action-card-title">${isTeacher ? t('offerMeetingSlot') : t('meetingReqTitle')}</div>
            <div class="action-card-desc">${t('actMeetingDesc')}</div>
          </div>
        </div>
      </main>
    </div>
    ${buildChatbot()}`;
  }

  /* ── H10. Teacher: meeting requests inbox ───────────────────── */
  function screenTeacherMeetings() {
    const sidebar = buildTeacherSidebar();

    const rows = STATE.meetingRequests.map((req, idx) => {
      const statusPill = req.status === 'approved'
        ? `<span class="pill pill-approved">${t('meetingApproved')}</span>`
        : req.status === 'rejected'
          ? `<span class="pill pill-rejected">${t('meetingRejected')}</span>`
          : `<span class="pill pill-pending">${t('pending')}</span>`;

      const actions = req.status === 'pending' ? `
        <div class="btn-row">
          <button class="btn btn-green btn-sm" onclick="approveMeeting(${idx})">${t('acceptRequest')}</button>
          <button class="btn btn-red   btn-sm" onclick="rejectMeeting(${idx})">${t('rejectRequest')}</button>
        </div>` : statusPill;

      return `
      <div class="card">
        <div class="flex-between mb-10">
          <div>
            <div style="font-size:13px;font-weight:500;color:var(--tx-primary)">${req.student} — ${req.course}</div>
            <div class="text-hint">${req.type === 'office' ? t('inPerson') : t('onlineMeeting')} · ${req.slot}</div>
          </div>
          ${req.status === 'pending' ? `<span class="pill pill-pending">${t('pending')}</span>` : statusPill}
        </div>
        <div style="font-size:12px;color:var(--tx-second);margin-bottom:12px;font-style:italic">"${req.note}"</div>
        ${actions}
      </div>`;
    }).join('');

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildIntroBanner('meetingRequestsTitle','meetingRequestsIntro')}
        <div class="page-title mb-16">${t('meetingRequestsTitle')}</div>
        ${rows}
      </main>
    </div>`;
  }

  /* ── H11. Teacher: office hours manager ─────────────────────── */
  function screenTeacherOfficeHours() {
    const sidebar = buildTeacherSidebar();

    /* Days of the week for the slot builder */
    const days  = ['Mon','Tue','Wed','Thu','Fri'];
    const times = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

    const slotGrid = (type) => days.map(d => `
      <div>
        <div style="font-size:11px;font-weight:600;color:var(--tx-second);margin-bottom:6px">${d}</div>
        ${times.map(ti => {
          const slot = `${d} ${ti}`;
          const active = TEACHERS[0].officeHours[type].includes(slot);
          return `<div class="hour-slot ${active?'selected':''}"
                       onclick="toggleHourSlot('${slot}','${type}')"
                       style="margin-bottom:5px;padding:5px 8px;font-size:10px">${ti}</div>`;
        }).join('')}
      </div>`).join('');

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildIntroBanner('officeHoursTitle','officeHoursIntro')}
        <div class="page-title mb-16">${t('officeHoursTitle')}</div>

        <div class="card mb-16">
          <div class="section-label">🏢 ${t('inPerson')}</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;overflow-x:auto">
            ${slotGrid('office')}
          </div>
        </div>

        <div class="card mb-16">
          <div class="section-label">💻 ${t('onlineMeeting')}</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;overflow-x:auto">
            ${slotGrid('online')}
          </div>
        </div>

        <button class="btn btn-primary">${t('save')}</button>
      </main>
    </div>`;
  }

  /* ── H12. Admin: analytics dashboard ───────────────────────── */
  function screenAnalytics() {
    const sidebar = buildAdminSidebar();

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildIntroBanner('analyticsTitle','analyticsIntro')}
        <div class="page-title mb-16">${t('analyticsTitle')}</div>

        <!-- Key metric cards -->
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-label">${t('totalInquiries')}</div>
            <div class="stat-value">312</div>
            <div class="stat-delta delta-up">+28 vs prev month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">${t('faqDeflections')}</div>
            <div class="stat-value">89</div>
            <div class="stat-delta delta-up">${t('faqBot')||'Chatbot resolves'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">${t('avgResponse')}</div>
            <div class="stat-value">4.2h</div>
            <div class="stat-delta delta-dn">+0.8h vs prev</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">${t('officeMeetings')}</div>
            <div class="stat-value">6</div>
            <div class="stat-delta delta-up">↓ from 31 last mo.</div>
          </div>
        </div>

        <!-- Stage resolution stacked bar -->
        <div class="card mb-16">
          <div class="section-label">${t('resolutionStage')}</div>
          <div class="stage-bar">
            <div style="width:28%;background:#1D9E75"></div>
            <div style="width:38%;background:#378ADD"></div>
            <div style="width:22%;background:#EF9F27"></div>
            <div style="width:2%;background:#E24B4A"></div>
            <div style="width:10%;background:#888780"></div>
          </div>
          <div class="stage-legend">
            ${[['#1D9E75',t('faqBot')||'FAQ / chatbot','28%'],
               ['#378ADD',t('teacherReply')||'Teacher reply','38%'],
               ['#EF9F27',t('ticketRes')||'Ticket resolved','22%'],
               ['#E24B4A',t('meeting')||'Meeting','2%'],
               ['#888780',t('pending'),'10%']].map(([c,l,p])=>`
              <div class="legend-item">
                <div class="legend-dot" style="background:${c}"></div>
                ${l} ${p}
              </div>`).join('')}
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">

          <!-- Inquiries by type bar chart -->
          <div class="card">
            <div class="section-label">${t('byType')}</div>
            ${[
              [t('catAttendance'),'72%','#378ADD','112'],
              [t('catTimetable'), '45%','#1D9E75','70'],
              [t('catGrading'),   '38%','#EF9F27','59'],
              [t('catCourse'),    '28%','#7F77DD','44'],
              [t('catOther'),     '17%','#888780','27'],
            ].map(([l,w,c,v])=>`
              <div class="bar-row">
                <span class="bar-label">${l}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${w};background:${c}"></div></div>
                <span class="bar-value">${v}</span>
              </div>`).join('')}
          </div>

          <!-- Response time by teacher -->
          <div class="card">
            <div class="section-label">${t('byTeacher')}</div>
            ${[
              ['Dr. Kaya', '30%','#378ADD','2.8h'],
              ['Dr. Arslan','55%','#378ADD','5.1h'],
              ['Dr. Şahin', '70%','#EF9F27','6.4h'],
              ['Dr. Sümer', '80%','#EF9F27','7.2h'],
              ['Registrar', '90%','#E24B4A','8.2h'],
            ].map(([l,w,c,v])=>`
              <div class="bar-row">
                <span class="bar-label">${l}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${w};background:${c}"></div></div>
                <span class="bar-value">${v}</span>
              </div>`).join('')}
          </div>
        </div>

        <!-- Top FAQ topics -->
        <div class="card" style="margin-top:14px">
          <div class="section-label">${t('topFAQ')}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
            ${[
              ['var(--info-bg)','var(--info-tx)',t('faqPill1')||'Makeup session policy · 31'],
              ['var(--green-bg)','var(--green-tx)',t('faqPill2')||'Grade calculation · 24'],
              ['var(--warn-bg)','var(--warn-tx)',t('faqPill3')||'Exam schedule · 18'],
              ['var(--bg-surface)','var(--tx-second)',t('faqPill4')||'Retake rules · 10'],
            ].map(([bg,tx,label])=>`
              <span class="pill" style="background:${bg};color:${tx};font-size:11px;padding:4px 10px">${label}</span>`
            ).join('')}
          </div>
        </div>
      </main>
    </div>`;
  }

  /* ── H12b. Admin: users dashboard ─────────────────────────── */
  function screenAdminUsers() {
    const sidebar = buildAdminSidebar();
    const users = [
      { name:'Ada Yılmaz', email:'ada.yilmaz@ciu.edu.tr', role:t('roleStudent'), dept:'Computer Sci.', status:t('online'), last:'Today 09:42', av:'AY', cls:'av-student' },
      { name:'B. Çelik', email:'b.celik@ciu.edu.tr', role:t('roleStudent'), dept:'Software Eng.', status:t('offline'), last:'Yesterday 18:10', av:'BÇ', cls:'av-student' },
      { name:'Dr. Demir Kaya', email:'demir.kaya@ciu.edu.tr', role:t('roleTeacher'), dept:'Computer Sci.', status:t('online'), last:'Today 10:15', av:'DK', cls:'av-teacher' },
      { name:'Dr. Selin Arslan', email:'selin.arslan@ciu.edu.tr', role:t('roleTeacher'), dept:'Software Eng.', status:t('online'), last:'Today 08:58', av:'SA', cls:'av-teacher' },
      { name:'Admin User', email:'admin@ciu.edu.tr', role:t('roleAdmin'), dept:'IT Services', status:t('online'), last:'Now', av:'AU', cls:'av-admin' },
    ];

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        <div class="intro-banner" role="note">
          <div class="intro-banner-icon">u</div>
          <div>
            <div class="intro-banner-title">${t('navUsers')}</div>
            <div class="intro-banner-body">${STATE.lang==='tr'?'Öğrenci, öğretmen ve yönetici hesaplarını buradan izleyebilir, rolleri ve hesap durumlarını kontrol edebilirsiniz.':'Review student, teacher, and admin accounts, including roles, departments, account status, and recent activity.'}</div>
          </div>
        </div>

        <div class="page-header">
          <div>
            <div class="page-title">${t('navUsers')}</div>
            <div class="page-subtitle">${STATE.lang==='tr'?'Toplam 5 demo kullanıcı':'5 demo users total'}</div>
          </div>
          <div class="btn-row">
            <button class="btn btn-sm">${t('all')}</button>
            <button class="btn btn-sm">${t('roleStudent')}</button>
            <button class="btn btn-sm">${t('roleTeacher')}</button>
            <button class="btn btn-primary">+ ${STATE.lang==='tr'?'Kullanıcı':'User'}</button>
          </div>
        </div>

        <div class="stat-grid">
          <div class="stat-card"><div class="stat-label">${t('roleStudent')}</div><div class="stat-value">2</div></div>
          <div class="stat-card"><div class="stat-label">${t('roleTeacher')}</div><div class="stat-value">2</div></div>
          <div class="stat-card"><div class="stat-label">${t('roleAdmin')}</div><div class="stat-value">1</div></div>
          <div class="stat-card"><div class="stat-label">${t('online')}</div><div class="stat-value">4</div></div>
        </div>

        <div class="card" style="padding:0;overflow:hidden">
          <table class="data-table">
            <thead>
              <tr>
                <th>${STATE.lang==='tr'?'Kullanıcı':'User'}</th>
                <th>${t('email')}</th>
                <th>${STATE.lang==='tr'?'Rol':'Role'}</th>
                <th>${t('department')}</th>
                <th>${STATE.lang==='tr'?'Durum':'Status'}</th>
                <th>${STATE.lang==='tr'?'Son giriş':'Last login'}</th>
              </tr>
            </thead>
            <tbody>
              ${users.map(u=>`
                <tr>
                  <td>
                    <div class="flex-center gap-8">
                      <div class="avatar ${u.cls}">${u.av}</div>
                      <span style="font-weight:500">${u.name}</span>
                    </div>
                  </td>
                  <td style="color:var(--tx-second)">${u.email}</td>
                  <td>${u.role}</td>
                  <td>${u.dept}</td>
                  <td><span class="pill ${u.status===t('online')?'pill-done':'pill-open'}">${u.status}</span></td>
                  <td style="color:var(--tx-hint)">${u.last}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </main>
    </div>`;
  }

  /* ── H13. FAQ browse (simple placeholder) ───────────────────── */
  function screenFAQBrowse() {
    const sidebar = buildStudentSidebar();
    const query = STATE.faqQuery.trim().toLowerCase();
    const categoryChips = FAQ_CATEGORIES.map(cat => `
      <span class="chip ${STATE.faqCategory===cat.id?'selected':''}"
            onclick="STATE.faqCategory='${cat.id}';render()" role="button">
        ${cat.label[STATE.lang] || cat.label.en}
      </span>`).join('');

    const articles = FAQ_ITEMS.filter(item => {
      const categoryMatches = STATE.faqCategory === 'all' || item.category === STATE.faqCategory;
      const haystack = [
        item.q.en, item.q.tr, item.a.en, item.a.tr, item.category, ...item.tags
      ].join(' ').toLowerCase();
      return categoryMatches && (!query || haystack.includes(query));
    });

    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        ${buildFAQCallout()}
        <div class="page-header">
          <div>
            <div class="page-title">${STATE.lang==='tr'?'Advisor SSS':'Advisor FAQ'}</div>
            <div class="page-subtitle">${STATE.lang==='tr'?'Ders kaydı/seçimi, çakışma, mezuniyet, dönem uzatma, sınav ve not konuları':'Course registration, course selection, clashes, graduation, semester extension, exams, and grading topics'}</div>
          </div>
          <button class="btn btn-primary" onclick="navigate('new-inquiry')">${t('newInquiry')}</button>
        </div>

        <div class="faq-toolbar">
          <input class="form-input" id="faq-search"
                 value="${STATE.faqQuery.replace(/"/g, '&quot;')}"
                 placeholder="${STATE.lang==='tr'?'Ders çakışması, resit, attendance ara...':'Search course clash, resit, attendance...'}"
                 onkeydown="if(event.key==='Enter'){STATE.faqQuery=this.value;render()}" />
          <div class="btn-row" style="justify-content:flex-end">
            <button class="btn btn-primary" onclick="STATE.faqQuery=document.getElementById('faq-search').value;render()">${STATE.lang==='tr'?'Ara':'Search'}</button>
            <button class="btn" onclick="STATE.faqQuery='';STATE.faqCategory='all';render()">${STATE.lang==='tr'?'Temizle':'Clear'}</button>
            <span class="text-hint" style="align-self:center">${articles.length} ${STATE.lang==='tr'?'sonuç':'results'}</span>
          </div>
        </div>

        <div class="chip-group mb-16">${categoryChips}</div>

        ${articles.length ? `
          <div class="faq-grid">
            ${articles.map(item=>`
              <div class="card faq-card">
                <div class="faq-card-head">
                  <div class="faq-question">❓ ${item.q[STATE.lang] || item.q.en}</div>
                  <span class="pill pill-open">${FAQ_CATEGORIES.find(c=>c.id===item.category)?.label[STATE.lang] || item.category}</span>
                </div>
                <div class="faq-answer">${item.a[STATE.lang] || item.a.en}</div>
                <div class="faq-tags">
                  ${item.tags.slice(0,3).map(tag=>`<span class="faq-tag">#${tag}</span>`).join('')}
                </div>
              </div>`).join('')}
          </div>` : `
          <div class="card">
            <div class="faq-question">${STATE.lang==='tr'?'Uygun cevap bulunamadı.':'No matching answer found.'}</div>
            <div class="faq-answer">${STATE.lang==='tr'?'Bu konuyu advisorunuza göndermek için yeni talep oluşturabilirsiniz.':'You can create a new inquiry and send this topic to your advisor.'}</div>
            <button class="btn btn-primary" style="margin-top:12px" onclick="navigate('new-inquiry')">${t('newInquiry')}</button>
          </div>`}
      </main>
    </div>
    ${buildChatbot()}`;
  }

  /* ── H14. Teacher: FAQ manager (placeholder) ────────────────── */
  function screenTeacherFAQ() {
    const sidebar = STATE.user?.role === 'admin'
      ? buildAdminSidebar()
      : buildTeacherSidebar();
    return `
    ${buildTopbar()}
    <div class="app-layout">
      ${sidebar}
      <main class="main-content">
        <div class="page-header">
          <div class="page-title">${t('navFAQMgr')}</div>
          <button class="btn btn-primary">+ ${STATE.lang==='tr'?'Yeni makale':'New article'}</button>
        </div>
        ${FAQ_ITEMS.map(item=>`
          <div class="inq-card">
            <div>
              <div class="inq-card-title">${item.q[STATE.lang] || item.q.en}</div>
              <div class="inq-card-meta">${FAQ_CATEGORIES.find(c=>c.id===item.category)?.label[STATE.lang] || item.category} · ${item.tags.slice(0,2).join(', ')}</div>
            </div>
            <div class="btn-row">
              <button class="btn btn-sm">${STATE.lang==='tr'?'Düzenle':'Edit'}</button>
              <button class="btn btn-sm btn-red">${STATE.lang==='tr'?'Sil':'Delete'}</button>
            </div>
          </div>`).join('')}
      </main>
    </div>`;
  }

  /* ============================================================
     SECTION I — MAIN RENDER FUNCTION
     Determines which screen to show based on STATE and injects
     the HTML into #app.
  ============================================================ */
  function render() {
    const app = document.getElementById('app');

    /* Route to auth screens if not logged in */
    if (!STATE.user) {
      STATE.screen = 'login';
      app.innerHTML = STATE.authMode === 'register'
        ? screenRegister()
        : screenLogin();
      return;
    }

    /* Route to the correct screen */
    const screenMap = {
      'student-portal':     screenStudentPortal,
      'new-inquiry':        screenNewInquiry,
      'student-tickets':    screenStudentTickets,
      'student-meetings':   screenStudentMeetings,
      'faq-browse':         screenFAQBrowse,
      'teacher-inbox':      screenTeacherInbox,
      'triage-view':        screenTriageView,
      'ticket-thread':      screenTicketThread,
      'teacher-meetings':   screenTeacherMeetings,
      'teacher-office-hours': screenTeacherOfficeHours,
      'teacher-faq':        screenTeacherFAQ,
      'admin-faq':          screenTeacherFAQ,
      'admin-users':        screenAdminUsers,
      'analytics':          screenAnalytics,
    };

    const screenFn = screenMap[STATE.screen];
    app.innerHTML = screenFn
      ? screenFn()
      : `<p style="padding:40px;text-align:center;color:var(--tx-hint)">Screen not found: ${STATE.screen}</p>`;
  }

  /* ============================================================
     SECTION J — FEATURE ACTIONS
     Button handlers and interactive logic.
  ============================================================ */

  /* ── Login / logout ────────────────────────────────────────── */
  function doLogin() {
    /* In a real app this would call the backend API.
       Here we simulate a successful login for demo purposes. */
    const emailInput = document.getElementById(STATE.authMode === 'register' ? 'reg-email' : 'login-email');
    const passInput  = document.getElementById(STATE.authMode === 'register' ? 'reg-pass' : 'login-pass');

    if (!emailInput?.value.trim() || !passInput?.value.trim()) {
      alert(STATE.lang === 'tr'
        ? 'Lutfen e-posta ve sifre alanlarini doldurun.'
        : 'Please fill in both e-mail and password.');
      return;
    }

    const role = STATE.loginRole;
    STATE.user = getDemoUser(role);

    /* Route to the appropriate home screen for the role */
    const homeScreens = {
      student: 'student-portal',
      teacher: 'teacher-inbox',
      admin:   'analytics',
    };
    navigate(homeScreens[role]);
  }

  function doLogout() {
    STATE.user   = null;
    STATE.screen = 'login';
    navigate('login');
  }

  /* ── Teacher card selection ─────────────────────────────────── */
  function selectTeacher(id) {
    STATE.selectedTeacher = id;
    STATE.selectedSlot    = null;   // reset slot when teacher changes
    render();
  }

  /* ── Chatbot toggle ─────────────────────────────────────────── */
  function toggleChat() {
    STATE.chatOpen = !STATE.chatOpen;
    /* Hide the badge once the chat is opened */
    const badge = document.getElementById('chat-badge');
    if (badge && STATE.chatOpen) badge.style.display = 'none';
    /* Re-render only the chatbot widget area */
    const fab = document.querySelector('.chatbot-fab');
    const panel = document.getElementById('chatbot-panel');
    if (panel) panel.className = `chatbot-panel ${STATE.chatOpen?'open':''}`;
  }

  function findFAQAnswer(message) {
    const words = message
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2);

    let best = null;
    let bestScore = 0;
    for (const item of FAQ_ITEMS) {
      const haystack = [
        item.q.en, item.q.tr, item.a.en, item.a.tr, item.category, ...item.tags
      ].join(' ').toLowerCase();
      const score = words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
      if (score > bestScore) {
        best = item;
        bestScore = score;
      }
    }

    if (!best || bestScore === 0) return null;
    return best;
  }

  /* ── Chatbot message handling ───────────────────────────────── */
  function chatSend(msg) {
    const body = document.getElementById('chatbot-body');
    if (!body) return;

    /* Append the user's message bubble */
    const userEl = document.createElement('div');
    userEl.className = 'chat-msg user';
    userEl.innerHTML = `<div class="chat-bubble user-bubble">${msg}</div>`;
    body.appendChild(userEl);

    /* Simulate a bot reply after a short delay */
    setTimeout(() => {
      const botEl = document.createElement('div');
      botEl.className = 'chat-msg bot';

      const match = findFAQAnswer(msg);
      const reply = match
        ? `<strong>${match.q[STATE.lang] || match.q.en}</strong><br>${match.a[STATE.lang] || match.a.en}`
        : t('chatbotNoMatch');

      botEl.innerHTML = `
        <div style="width:22px;height:22px;border-radius:50%;background:var(--info-bg);
                    display:flex;align-items:center;justify-content:center;
                    font-size:9px;color:var(--info-tx);flex-shrink:0">AI</div>
        <div class="chat-bubble bot-bubble">${reply}</div>`;
      body.appendChild(botEl);
      body.scrollTop = body.scrollHeight;
    }, 600);

    body.scrollTop = body.scrollHeight;
  }

  function chatSendFromInput() {
    const input = document.getElementById('chat-input');
    if (!input || !input.value.trim()) return;
    chatSend(input.value.trim());
    input.value = '';
  }

  /* ── Meeting accept / reject ────────────────────────────────── */
  function approveMeeting(idx) {
    STATE.meetingRequests[idx].status = 'approved';
    render();
  }

  function rejectMeeting(idx) {
    STATE.meetingRequests[idx].status = 'rejected';
    render();
  }

  /* ── Office hour slot toggle (teacher) ──────────────────────── */
  function toggleHourSlot(slot, type) {
    const hours = TEACHERS[0].officeHours[type];
    const pos   = hours.indexOf(slot);
    if (pos > -1) hours.splice(pos, 1);
    else          hours.push(slot);
    render();
  }

  /* ============================================================
     SECTION K — INITIALISATION
     Set default theme from system preference and render.
  ============================================================ */
  (function init() {
    /* Respect the user's OS-level colour scheme preference */
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      STATE.theme = 'dark';
      document.body.className = 'dark';
    }
    history.replaceState(getRouteState(STATE.screen), '', '#login');
    /* First render — shows the login screen */
    render();
  })();
