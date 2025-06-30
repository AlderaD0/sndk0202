import React, { useState } from 'react';

// Основной компонент приложения
const App = () => {
  // Состояние для полей формы контактов
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные формы:', formData);
    // Используем простой alert для демонстрации, так как здесь нет бэкенда
    alert('Спасибо за ваше сообщение! (Эта форма не отправляет данные на сервер)');
    // Здесь можно было бы добавить логику для отправки данных на сервер
    setFormData({ name: '', email: '', message: '' }); // Очистка формы
  };

  // Данные для портфолио Дмитрия Сыендука
  const portfolioData = {
    header: {
      name: 'Дмитрий Сыендук',
      title: 'Озвучиватель, Переводчик, Видеоблогер',
      nav: [
        { name: 'Обо мне', id: 'about' },
        { name: 'Навыки', id: 'skills' },
        { name: 'Опыт и Проекты', id: 'experience-education' },
        { name: 'Контакты', id: 'contact' },
      ],
    },
    about: {
      photo: 'https://www.film.ru/sites/default/files/people/40200724-2890322.jpg', // Здесь будет ваша фотография. Замените на реальный URL.
      initialBio: `Привет! Я Дмитрий Сыендук — голос, который вы могли слышать во многих анимационных проектах и фильмах. 
            Уже более десяти лет я занимаюсь профессиональной озвучкой, переводом и адаптацией зарубежного контента для русскоязычной аудитории. 
            Мой путь начался с создания популярного YouTube-канала, где я делюсь своим творчеством и анализирую анимацию. 
            Я постоянно ищу новые вызовы и способы сделать контент более доступным и интересным для зрителей.`,
    },
    skills: [
      { name: 'Озвучка персонажей', level: 98 },
      { name: 'Перевод и адаптация', level: 95 },
      { name: 'Монтаж видео', level: 85 },
      { name: 'Сценаристика', level: 80 },
      { name: 'Работа с голосом', level: 97 },
      { name: 'YouTube-продакшн', level: 90 },
      { name: 'Звукорежиссура', level: 75 },
    ],
    experience: [
      {
        title: 'Основатель и Главный Голос',
        company: 'YouTube-канал "Сыендук"',
        dates: '2012 - Настоящее время',
        description: 'Создание и развитие одного из самых популярных каналов на YouTube по озвучке и анализу анимации. Полный цикл производства видео: от сценария и перевода до озвучки, монтажа и публикации.',
      },
      {
        title: 'Официальный Голос / Переводчик',
        company: 'Различные студии и проекты (например, "Рик и Морти", "Время приключений")',
        dates: '2015 - Настоящее время',
        description: 'Профессиональная озвучка и адаптация зарубежных мультсериалов и фильмов для официального русского проката. Работа с крупными медиакомпаниями и продакшн-студиями.',
      },
      {
        title: 'Участие в дубляже',
        company: 'Киностудии и дистрибьюторы',
        dates: '2017 - Настоящее время',
        description: 'Регулярное участие в дубляже полнометражных фильмов и сериалов, работа над голосами ключевых персонажей.',
      },
    ],
    education: [
      {
        degree: 'Высшее образование (направление не уточняется)',
        institution: 'Несколько учебных заведений',
        dates: '200X - 200X',
        description: 'Получение базовых знаний в области гуманитарных или технических наук, необходимых для дальнейшего развития в творческой сфере.',
      },
    ],
    footer: {
      copyright: '2025 Дмитрий Сыендук. Все права защищены.',
      social: [ // Добавлены данные для социальных сетей в подвале
        { name: 'YouTube', url: 'https://youtube.com/syenduk' },
        { name: 'ВКонтакте', url: 'https://vk.com/syenduk' },
        { name: 'Telegram', url: 'https://t.me/syenduk' },
      ],
    },
  };

  // Компонент для отображения уровня навыка
  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  // Компонент для карточки опыта или образования
  const Card = ({ item }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {item.title || item.degree}
      </h3>
      <p className="text-blue-600 dark:text-blue-400 text-lg mb-1">
        {item.company || item.institution}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
        {item.dates}
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-inter text-gray-800 dark:text-gray-200">
      {/* Шапка */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 rounded-b-xl">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            {portfolioData.header.name} <span className="text-blue-600">{portfolioData.header.title}</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {portfolioData.header.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Секция "Обо мне" */}
        <section id="about" className="mb-16 scroll-mt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={portfolioData.about.photo}
              alt="Фото Дмитрия Сыендука"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x400/94A3B8/FFFFFF?text=Фото+Сыендука';
              }}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Обо мне
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                {portfolioData.about.initialBio}
              </p>
            </div>
          </div>
        </section>

        {/* Секция "Навыки" */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
              Навыки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {portfolioData.skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Секция "Опыт работы и Образование" */}
        <section id="experience-education" className="mb-16 scroll-mt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
              Опыт работы и Проекты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
                  Опыт работы
                </h3>
                {portfolioData.experience.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2">
                  Образование
                </h3>
                {portfolioData.education.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Секция "Контакты" */}
        <section id="contact" className="mb-16 scroll-mt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
              Контакты
            </h2>
            {/* Форма обратной связи по центру */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 dark:text-white"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 dark:text-white"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-800 dark:bg-gray-950 py-8 rounded-t-xl text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm mb-4">
            {portfolioData.footer.copyright}
          </p>
          {/* Ссылки на социальные сети в подвале */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            {portfolioData.footer.social.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <nav className="mt-4">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
              {portfolioData.header.nav.map((item) => (
                <li key={`footer-${item.id}`}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
