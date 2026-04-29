const quizData = {
    // --- ОБЛАСТИ ---
    "oblast-sofia": { title: "София", questions: [
        { q: "В кой манастир се намира гробът на Иван Рилски?", answers: ["Рилски манастир", "Дряновски", "Бачковски", "Троянски"], correct: 0 },
        { q: "Кой е най-големият християнски храм на Балканите?", answers: ["Катедралата Свети Александър Невски", "Света Неделя", "Света Петка Самарджийска", "Боянска църква"], correct: 0 }
    ]},
    "oblast-varna": { title: "Варна", questions: [
        { q: "Най-старото обработено злато в света е намерено во:", answers: ["Варненския халколитен некропол", "Созопол", "Несебър", "Пловдив"], correct: 0 },
        { q: "Как се казва най-големият парк във Варна?", answers: ["Морската градина", "Борисова градина", "Асеновата градина", "Централен парк"], correct: 0 }
    ]},
    "oblast-plovdiv": { title: "Пловдив", questions: [
        { q: "Как се нарича древния театър в Пловдив?", answers: ["Античния театър", "Римския амфитеатър", "Тракийския стадион", "Одеон"], correct: 0 },
        { q: "Пловдив е най-старият жив град в Европа.", answers: ["Вярно", "Грешно"], correct: 0 }
    ]},
    "oblast-burgas": { title: "Бургас", questions: [{ q: "Несебър е включен в списъка на ЮНЕСКО.", answers: ["Вярно", "Грешно"], correct: 0 }]},
    "oblast-pleven": { title: "Плевен", questions: [{ q: "В музея в Плевен се намира Панорамата.", answers: ["Вярно", "Грешно"], correct: 0 }]},
    "oblast-vidin": { title: "Видин", questions: [{ q: "Коя е единствената запазена средновековна крепост по поречието на Дунав?", answers: ["Баба Вида", "Калиакра", "Севтополис", "Кабиле"], correct: 0 }]},
    "oblast-ruse": { title: "Русе", questions: [{ q: "Как е известен Русе?", answers: ["Малкият Виена", "Малкият Париж", "Малкият Рим", "Малкият Лондон"], correct: 0 }]},
    "oblast-stara-zagora": { title: "Стара Загора", questions: [{ q: "В Стара Загора се намира най-старата неолитна селищна могила в Европа.", answers: ["Вярно", "Грешно"], correct: 0 }]},
    "oblast-gabrovo": { title: "Габрово", questions: [{ q: "Какъв център за култура е Етъра?", answers: ["Музей на открито", "Исторически музей", "Художествена галерия", "Оперен театър"], correct: 0 }]},
    "oblast-veliko-tarnovo": { title: "Велико Търново", questions: [{ q: "Коя крепост е символ на Велико Търново?", answers: ["Царевец", "Трапезица", "Калето", "Перперикон"], correct: 0 }]},
    "oblast-blagoevgrad": { title: "Благоевград", questions: [{ q: "Кой известен манастир се намира в област Благоевград?", answers: ["Рилски манастир", "Троянски манастир", "Дряновски манастир", "Килифаревски манастир"], correct: 0 }]},
    "oblast-kardzhali": { title: "Кърджали", questions: [{ q: "Кой древен скален комплекс се намира край Кърджали?", answers: ["Перперикон", "Мадара", "Белоградчишките скали", "Побити камъни"], correct: 0 }]},
    "oblast-haskovo": { title: "Хасково", questions: [{ q: "В Хасково се намира най-високата статуя на Богородица в света.", answers: ["Вярно", "Грешно"], correct: 0 }]},
    "oblast-yambol": { title: "Ямбол", questions: [{ q: "Кой резерват се намира близо до Ямбол?", answers: ["Сребърна", "Калимок-Бръшлен", "Долна Топчия", "Ропотамо"], correct: 2 }]},
    "oblast-sliven": { title: "Сливен", questions: [{ q: "Сливен е известен като градът на:", answers: ["Стоте войводи", "Стоте хълма", "Стоте езера", "Стоте църкви"], correct: 0 }]},
    "oblast-dobrich": { title: "Добрич", questions: [{ q: "Кой курорт се намира в област Добрич?", answers: ["Албена", "Слънчев бряг", "Златни пясъци", "Созопол"], correct: 0 }]},
    "oblast-shumen": { title: "Шумен", questions: [{ q: "Кой паметник се издига край Шумен?", answers: ["Паметник „Създатели на българската държава“", "Альоша", "Бузлуджа", "Цар Освободител"], correct: 0 }]},
    "oblast-targovishte": { title: "Търговище", questions: [{ q: "Как се е наричал Търговище в миналото?", answers: ["Ески Джумая", "Станимака", "Доростол", "Преслав"], correct: 0 }]},
    "oblast-silistra": { title: "Силистра", questions: [{ q: "Силистра се намира на брега на коя река?", answers: ["Дунав", "Марица", "Искър", "Струма"], correct: 0 }]},
    "oblast-razgrad": { title: "Разград", questions: [{ q: "Кой археологически резерват се намира край Разград?", answers: ["Абритус", "Кабиле", "Севтополис", "Никополис ад Иструм"], correct: 0 }]},
    "oblast-smolyan": { title: "Смолян", questions: [{ q: "Смолян се намира в коя планина?", answers: ["Родопите", "Рила", "Пирин", "Стара планина"], correct: 0 }]},
    "oblast-kyustendil": { title: "Кюстендил", questions: [{ q: "Кюстендил е известен като градът на:", answers: ["Черешите", "Розите", "Лавандулата", "Сливите"], correct: 0 }]},
    "oblast-pernik": { title: "Перник", questions: [{ q: "Кой международен фестивал се провежда в Перник?", answers: ["Сурва", "Кукерландия", "Розобер", "Нестинарство"], correct: 0 }]},
    "oblast-pazardzhik": { title: "Пазарджик", questions: [{ q: "Кой курорт се намира в област Пазарджик?", answers: ["Велинград", "Боровец", "Пампорово", "Чепеларе"], correct: 0 }]},
    "oblast-lovech": { title: "Ловеч", questions: [{ q: "Кой уникален мост се намира в Ловеч?", answers: ["Покритият мост", "Орлов мост", "Аспарухов мост", "Мостът на влюбените"], correct: 0 }]},
    "oblast-montana": { title: "Монтана", questions: [{ q: "Как се е наричал град Монтана в миналото?", answers: ["Михайловград", "Фердинанд", "Толбухин", "Сердика"], correct: 0 }]},
    "oblast-vratsa": { title: "Враца", questions: [{ q: "Кое природно образувание се намира край Враца?", answers: ["Врачански карст", "Побити камъни", "Белоградчишки скали", "Крушунски водопади"], correct: 0 }]},
    "oblast-sofia-region": { title: "София област", questions: [{ q: "Кой курорт се намира в Софийска област?", answers: ["Боровец", "Пампорово", "Банско", "Чепеларе"], correct: 0 }]},

    // --- ТЕМИ ---
    "cat-ninkn-history": { title: "История на НИНКН", questions: [
        { q: "НИНКН е създаден като наследник на правомощията на ?", answers: ["Министерство на културата", "БАН", "Общини", "МРРБ"], correct: 0 },
        { q: "Кой е първият директор на НИПК ?", answers: ["Борис Марков", "Пейо Берберлиев", "Рачо Рачев", "Иван Николов"], correct: 0 },
        { q: "През коя година е основан Национален институт за паметниците на културата (НИПК) ?", answers: ["1956 г.", "1957 г.", "1958 г. ", "1959 г."], correct: 1 },
        { q: "През коя година е съставен Правилник за устройството и задачите на НИПК ?", answers: ["1968 г.", "1972 г.", "1976 г.", "1980 г."], correct: 2 },
        { q: "С какъв орден е награден НИПК през 1982 г. ?", answers: ["Орденът 13 века България", "Орденът Мадарски конник", "Орден Народна република България", "Орден Стара планина"], correct: 2 },
        { q: "В кой от посочените градове не е съществувало териториално звено към НИПК ?", answers: ["Бургас", "Варна", "Пловдив", "Плевен"], correct: 3 },
        { q: "През коя година е приет Закона за старините ?", answers: ["1911 г.", "1888 г.", "1994 г.", "1921 г."], correct: 0 },
        { q: "Първоначално НИПК съществува като отдел към Комитета за просвета и култура. ", answers: ["вярно", "грешно"], correct: 0 },
        { q: "Към 1977, кое от следните подразделения не функционира като структура към института ?", answers: ["Сектор Реставрация", "Сектор Документиране", "Дирекция Изпълнение", "Дирекция Проучване и проектиране"], correct: 0 },
        { q: "Кой от посочените не е бил директор на НИПК", answers: ["Цветана Дремсизова", "Емма Москова", "Иван Николов", "Рачо Рачев"], correct: 0 },
        { q: "През кои години директор на НИНКН е Йорданка Кандулкова ?", answers: ["2007 - 2008 г.", "2005 - 2006 г.", "2010 - 2011 г.", "2012 - 2013 г."], correct: 2 },
        { q: "От 1963 до 1973 г. директор на НИПК е ?", answers: ["Пейо Берберлиев", "Тодор Кръстев", "Иван Вангелов", "Красимер Тодоров"], correct: 0 },
        { q: "По времето на кой директор институтът е преименуван в НИНКН ?", answers: ["Георги Угринов", "Людмила Маркова", "Рачо Рачев", "Даниела Джуркова"], correct: 0 },
        { q: "През коя година директор на НИПК става Тодор Кръстев ?", answers: ["1982 г.", "1984 г.", "1986 г.", "1980 г."], correct: 0 },
        { q: "През коя година Петър Петров става директор на НИНКН ?", answers: ["2019 г.", "2020 г.", "2021 г.", "2022 г."], correct: 2 },
        { q: "С ПМС №165 от 1958 г. НИПК е ?", answers: ["легитимиран като самостоятелна институция", "създаден", "преструктуриран в дирекция", "с приет нов Правилник за устройството"], correct: 0 },
        { q: "През 1964 г. към НИПК е ?", answers: ["създадена специализирана строителна организация", "създадена дирекция Изучаване", "създаден сектор Документиране", "създадена дирекция Изпълнение"], correct: 0 },
        { q: "През 2000 г. броят на щатните служители в НИПК е съкратен до ?", answers: ["69", "59", "79", "89"], correct: 0 },
        { q: "На коя от посочените локации не е бил преместван НИНКН?", answers: ["бул. Христо Ботев", "ул. Лъчезар Станчев", "бул. Дондуков", "бул. Александър Стамболийски"], correct: 0 },
        { q: "С колко човека приблизително е разполагала всяка районна служба към НИПК?", answers: ["350", "250", "150", "50"], correct: 0 },
        { q: "Структурната реформа през 1991 г. се извършва на основание ПМС №222", answers: ["вярно", "грешно"], correct: 0 },
        { q: "С ПМС №38 от 2009 година, е приет Правилник за устройството и задачите на НИНКН", answers: ["грешно", "вярно"], correct: 0 },
        { q: "С колко човека е било обезпечено Централното управление на НИПК след утвърдения правилник от 1976 г.?", answers: ["420", "120", "220", "320"], correct: 0 },
        { q: "С колко човека е разполагало ателие Художествена реставрация след утвърдения правилник от 1976 г.?", answers: ["130", "180", "80", "30"], correct: 0 }
    ]},
    "cat-ninkn-structure": { title: "Структура на НИНКН", questions: [{ q: "На колко регионални дирекции се поделя НИНКН?", answers: ["28", "20", "10", "5"], correct: 0 }]},
    "cat-unesco": { title: "ЮНЕСКО", questions: [{ q: "Колко обекта в България са в списъка на ЮНЕСКО?", answers: ["9", "5", "12", "20"], correct: 2 }, { q: "Какъв е статутът на Пирин?", answers: ["Природен", "Културен", "Смесен", "Нематериален"], correct: 0 }]},
    "cat-izuchavane": { title: "Изучаване на недвижими културни ценности", questions: [{ q: "Кой изследва земните пластове?", answers: ["Археолог", "Реставратор", "Архитект", "Историк"], correct: 0 }]},
    "cat-archaeology": { title: "Археология", questions: [{ q: "Кой период е преди Средновековието?", answers: ["Античност", "Възраждане", "Османско владеене", "Модернизъм"], correct: 0 }]},
    "cat-architecture": { title: "Архитектура", questions: [{ q: "Архитектът се занимава със запазване на сградите.", answers: ["Вярно", "Грешно"], correct: 0 }]},
    "cat-archive": { title: "Архив", questions: [{ q: "Архивът съхранява документи.", answers: ["Вярно", "Грешно"], correct: 0 }]},

    // --- ЗАКОНОДАТЕЛСТВО ---
    "law-zkn": { title: "Закон за културното наследство", questions: [{ q: "ЗКН закриля културните ценности.", answers: ["Вярно", "Грешно"], correct: 0 }, { q: "Културните ценности могат да бъдат:", answers: ["Само държавна собственост", "Само частна собственост", "Публична и частна собственост", "Само общинска собственост"], correct: 2 }]},
    "law-zut": { title: "ЗУТ", questions: [{ q: "ЗУТ урежда устройството и изграждането на територията.", answers: ["Вярно", "Грешно"], correct: 0 }]},
    "law-ordinance1": { title: "Наредба № 1 за теренни проучвания", questions: [{ q: "Наредбата урежда извършването на теренни археологически проучвания.", answers: ["Вярно", "Грешно"], correct: 0 }]}
};

class QuizApp {
    constructor() {
        this.state = {
            currentUser: null,
            currentCategory: null,
            score: 0,
            lives: 3,
            questionIndex: 0,
            gameMode: 'points',
            timerSeconds: 0,
            timerInterval: null,
            currentQuestions: [],
            correctCount: 0
        };
        this.leaderboard = JSON.parse(localStorage.getItem('quiz_leaderboard')) || [];
    }

    init() {
        this.generateOblastButtons();
        this.showSection('login-section');
    }

    showSection(id) {
        document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        window.scrollTo(0, 0);
    }

    generateOblastButtons() {
        const container = document.getElementById('oblast-container');
        const oblastKeys = Object.keys(quizData).filter(k => k.startsWith('oblast-'));
        
        oblastKeys.forEach(key => {
            const btn = document.createElement('div');
            btn.className = 'oblast-btn';
            btn.innerText = quizData[key].title;
            btn.onclick = () => this.startQuiz(key);
            container.appendChild(btn);
        });
    }

    login() {
        const name = document.getElementById('username-input').value.trim();
        if (name) {
            this.state.currentUser = name;
            document.getElementById('header-user-name').innerText = name;
            this.showDashboard();
        } else {
            document.getElementById('username-input').style.borderColor = 'red';
        }
    }

    logout() {
        this.state.currentUser = null;
        document.getElementById('username-input').value = '';
        this.showSection('login-section');
    }

    showDashboard() {
        this.stopTimer();
        this.showSection('dashboard-section');
    }

    showSettings() {
        this.showSection('settings-section');
    }

    showSubcategories(type) {
        const container = document.getElementById('subcat-container');
        container.innerHTML = '';
        
        if (type === 'law') {
            document.getElementById('subcat-title').innerText = "Законодателство";
            const lawKeys = Object.keys(quizData).filter(k => k.startsWith('law-'));
            
            lawKeys.forEach(key => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.height = 'auto';
                card.style.padding = '20px';
                card.innerHTML = `<h3>${quizData[key].title}</h3>`;
                card.onclick = () => this.startQuiz(key);
                container.appendChild(card);
            });
        }
        this.showSection('subcategories-section');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startQuiz(catId) {
        if (!quizData[catId]) return;

        this.state.currentCategory = catId;
        this.state.score = 0;
        this.state.lives = 3;
        this.state.questionIndex = 0;
        this.state.correctCount = 0;
        
        let questions = [...quizData[catId].questions];
        questions = this.shuffleArray(questions);
        this.state.currentQuestions = questions.slice(0, 20);

        document.getElementById('quiz-cat-title').innerText = quizData[catId].title;
        this.showSection('game-section');
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.state.questionIndex >= this.state.currentQuestions.length) {
            this.endGame();
            return;
        }

        const qData = this.state.currentQuestions[this.state.questionIndex];
        
        this.updateStats();
        document.getElementById('q-text').innerText = qData.q;
        
        const currentQNum = this.state.questionIndex + 1;
        const totalQNum = this.state.currentQuestions.length;
        const qCounterEl = document.getElementById('q-counter');
        if(qCounterEl) qCounterEl.innerText = `Въпрос ${currentQNum} / ${totalQNum}`;

        const imgEl = document.getElementById('q-image');
        if (qData.image) {
            imgEl.src = qData.image;
            imgEl.style.display = 'block';
        } else {
            imgEl.style.display = 'none';
        }

        const answersArea = document.getElementById('answers-area');
        answersArea.innerHTML = '';

        let answersObj = qData.answers.map((ans, index) => ({
            text: ans,
            isCorrect: index === qData.correct
        }));

        answersObj = this.shuffleArray(answersObj);

        answersObj.forEach(ans => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.innerText = ans.text;
            btn.onclick = () => this.handleAnswer(ans.isCorrect, btn);
            answersArea.appendChild(btn);
        });

        this.resetTimer();
    }

    resetTimer() {
        this.stopTimer();
        const bar = document.getElementById('timer-bar');
        bar.style.width = '100%';
        
        if (this.state.timerSeconds > 0) {
            let timeLeft = this.state.timerSeconds;
            bar.style.backgroundColor = 'var(--accent-color)';
            
            this.state.timerInterval = setInterval(() => {
                timeLeft--;
                const percent = (timeLeft / this.state.timerSeconds) * 100;
                bar.style.width = `${percent}%`;
                
                if(percent < 30) bar.style.backgroundColor = '#e74c3c';
                
                if (timeLeft <= 0) {
                    this.stopTimer();
                    this.handleAnswer(false, null);
                }
            }, 1000);
        } else {
            bar.style.width = '100%';
            bar.style.backgroundColor = 'transparent';
        }
    }

    stopTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    }

    handleAnswer(isCorrect, btnElement) {
        this.stopTimer();
        
        const allBtns = document.querySelectorAll('.answer-btn');
        allBtns.forEach(b => b.disabled = true);

        if (isCorrect) {
            if(btnElement) btnElement.classList.add('correct');
            
            this.state.correctCount = (this.state.correctCount || 0) + 1;
            
            if (this.state.gameMode === 'points') {
                this.state.score = (this.state.score || 0) + 10;
                document.getElementById('score-val').innerText = this.state.score;
            } 
        } else {
            if(btnElement) btnElement.classList.add('wrong');
            if (this.state.gameMode === 'points') {
                this.state.lives--;
            }
        }
        
        this.updateStats();

        if (this.state.gameMode === 'points' && this.state.lives <= 0) {
            setTimeout(() => this.endGame(), 1500);
        } else {
            setTimeout(() => {
                this.state.questionIndex++;
                this.loadQuestion();
            }, 1200);
        }
    }

    updateStats() {
        const scoreContainer = document.getElementById('score-val');
        const livesContainer = document.getElementById('lives-val');
        const qCounter = document.getElementById('q-counter');

        if (this.state.gameMode === 'points') {
            if(scoreContainer) scoreContainer.innerText = this.state.score;
            
            let hearts = '';
            for(let i=0; i<this.state.lives; i++) hearts += '❤️';
            if(livesContainer) {
                livesContainer.innerText = hearts;
                livesContainer.style.display = 'inline';
            }
            if(qCounter) qCounter.style.display = 'none';
        } else {
            if(scoreContainer) scoreContainer.innerText = `Правилни: ${this.state.correctCount}`;
            
            if(livesContainer) livesContainer.style.display = 'none';
            if(qCounter) qCounter.style.display = 'block'; 
        }
    }

    confirmExit() {
        if(confirm("Сигурни ли сте, че искате да напуснете? Прогресът ще бъде загубен.")) {
            this.showDashboard();
        }
    }

    endGame() {
        this.showSection('result-section');
        const catTitle = quizData[this.state.currentCategory].title;
        
        const cCount = Number(this.state.correctCount) || 0;
        const tLen = Number(this.state.currentQuestions.length) || 1;
        const cScore = Number(this.state.score) || 0;
        
        let finalVal = 0;
        let msg = "";
        let displayScore = "";

        if (this.state.gameMode === 'points') {
            finalVal = cScore;
            displayScore = `Точки: ${finalVal}`;
            msg = this.state.lives > 0 ? "Честито! Завършихте успешно." : "Изчерпаха се животите ви.";
        } else {
            const percent = Math.round((cCount / tLen) * 100);
            finalVal = percent;
            displayScore = `Успеваемост: ${percent}%`;
            msg = `Успеваемост: ${percent}%`;
            
            if(percent > 80) msg += " - Страхотно!";
            else if(percent > 50) msg += " - Добре!";
            else msg += " - Пробвайте отново.";
        }

        document.getElementById('result-title').innerText = "Край на въпросника";
        
        const finalScoreEl = document.getElementById('final-score-text');
        const feedbackMsgEl = document.getElementById('feedback-msg');
        
        if(finalScoreEl) finalScoreEl.innerText = displayScore;
        if(feedbackMsgEl) feedbackMsgEl.innerText = this.state.gameMode === 'points' ? msg : catTitle;

        if(this.state.currentUser) {
            this.saveScore(finalVal, catTitle);
        }
    }

    saveSettings() {
        const newMode = document.getElementById('game-mode-select').value;
        const newTimer = parseInt(document.getElementById('timer-select').value);
        
        if(confirm("Сигурни ли сте, че искате да приложите новите настройки?")) {
            this.state.gameMode = newMode;
            this.state.timerSeconds = newTimer;
            alert("Настройките са запазени успешно!");
        }
    }

    saveScore(score, category) {
        const numericScore = Number(score);

        if (isNaN(numericScore)) {
            console.error("Грешка: Опит за запис на невалидни точки:", score);
            return;
        }

        const entry = {
            name: this.state.currentUser,
            score: numericScore,
            category: category,
            mode: this.state.gameMode,
            date: new Date().toLocaleDateString()
        };

        this.leaderboard.push(entry);
        this.leaderboard = this.leaderboard.filter(e => typeof e.score === 'number' && !isNaN(e.score));
        this.leaderboard.sort((a, b) => b.score - a.score);
        this.leaderboard = this.leaderboard.slice(0, 10);
        
        try {
            localStorage.setItem('quiz_leaderboard', JSON.stringify(this.leaderboard));
            console.log("Записано успешно в LocalStorage:", this.leaderboard);
        } catch (e) {
            console.error("Грешка при запис в LocalStorage:", e);
        }
    }

    showLeaderboard() {
        const tbodyPoints = document.querySelector('#leaderboard-points tbody');
        const tbodyPercent = document.querySelector('#leaderboard-percent tbody');

        tbodyPoints.innerHTML = '';
        tbodyPercent.innerHTML = '';

        const pointsScores = this.leaderboard.filter(e => e.mode === 'points');
        const percentScores = this.leaderboard.filter(e => e.mode === 'percent');

        pointsScores.forEach((entry, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${i+1}</td>
                <td>${entry.name}</td>
                <td style="font-weight:bold;">${entry.score}</td>
                <td>${entry.category}</td>
            `;
            tbodyPoints.appendChild(tr);
        });

        percentScores.forEach((entry, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${i+1}</td>
                <td>${entry.name}</td>
                <td style="font-weight:bold;">${entry.score}%</td>
                <td>${entry.category}</td>
            `;
            tbodyPercent.appendChild(tr);
        });

        this.showSection('leaderboard-section');
    }

    resetScores() {
        if(confirm("Сигурни ли сте, че искате да изтриете всички резултати?")) {
            this.leaderboard = [];
            localStorage.removeItem('quiz_leaderboard');
            this.showLeaderboard();
        }
    }
}

const app = new QuizApp();
document.addEventListener('DOMContentLoaded', () => app.init());