# Clean.Car | Premium Car Wash & Detailing Web App 🚗✨

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**Live Demo:** https://carwash-next-js-x1ae-6b9og8w5g-shenhi30s-projects.vercel.app/

## 📌 Про проект

Full-Stack веб-додаток для преміальної автомийки та детейлінг-студії. Метою проекту було створення швидкого, адаптивного та візуально привабливого інтерфейсу з піксель-перфект перенесенням макетів із Figma, підкріпленого надійною хмарною базою даних для гнучкого управління прайс-листом.

## 🚀 Головні фічі

- **Динамічне ціноутворення:** Інтегрована логіка бази даних, яка автоматично визначає та відображає базові ціни (формат "від X ₴") або фіксовані суми залежно від типу послуги.
- **Плавний UX/UI:** Використання Framer Motion для створення преміальних анімацій (glassmorphism ефекти, плавні переходи між табами) та модульного Sass для суворої типізації стилів.
- **Миттєве завантаження:** Інтеграція TanStack Query (React Query) для кешування API-запитів, що забезпечує миттєве перемикання між категоріями авто без мережевих затримок.
- **Mobile-First підхід:** Горизонтальний скрол навігації на мобільних пристроях та автоматична інтеграція протоколу `tel:` для швидкого зв'язку з клієнтом.

## 💻 Технологічний стек

### Frontend

- **Framework:** Next.js (App Router)
- **State Management & Fetching:** React Query, Axios
- **Styling:** SCSS Modules (Custom Design System based on Figma variables)
- **Animations:** Framer Motion, Lucide React (Icons)

### Backend & Database

- **Server:** Node.js, Express.js
- **Database:** TiDB (MySQL-compatible Serverless Cloud DB)

## 🧠 Технічні рішення та виклики (Technical Decisions)

_Для технічних спеціалістів, які переглядають мій код:_

1. **Ізоляція логіки відображення:** Замість зберігання рядкових значень ціни в базі даних (наприклад, "від 200"), я реалізував колонку `is_starting_price (BOOLEAN)`. Це дозволяє зберегти чистоту математичних розрахунків у БД, перенісши логіку рендерингу префіксів виключно на клієнтську частину (Next.js).
2. **Оптимізація запитів:** Завдяки React Query, дані про типи авто та ціни кешуються після першого завантаження сторінки, що зменшує навантаження на базу даних та покращує користувацький досвід.
3. **Гнучка система стилів:** Створено єдиний `variables.scss` для управління темою, що робить додаток легко масштабованим і готовим до швидкого ребрендингу.

## 🛠 Локальний запуск (Local Setup)

1. Клонуйте репозиторій:

```bash
git clone [https://github.com/](https://github.com/)[ваш-юзернейм]/clean-car-app.git
```
