// function SearchBar() {
//   return (
//     <div className="seacrh-bar__container">
//       <input type="text" placeholder="Search...." />
//       <div className="seacrh-bar_in-stock_checkbox">
//         <input type="checkbox" />
//         <label htmlFor="">Only show products in stock</label>
//       </div>
//     </div>
//   );
// }

// export function ProductCategoryRow({ name }) {
//   return (
//     <tr>
//       <td colSpan="2">
//         <strong>{name}</strong>
//       </td>
//     </tr>
//   );
// }

// export function ProductRow({ name, price }) {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{price}</td>
//     </tr>
//   );
// }

// export function ProductTable() {
//   return (
//     <div className="product-table__container">
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//         <ProductCategoryRow name="Sporting Goods" />
//         <ProductRow name="Football" price="10.99" />
//         <ProductRow name="Baseball" price="9.99" />
//         <ProductRow name="Basketball" price="7.99" />
//         <ProductCategoryRow name="Electronics" />
//         <ProductRow name="iPod Touch" price="1.99" />
//         <ProductRow name="iPhone 5" price="5.99" />
//         <ProductRow name="Nexus 7" price="99.99" />
//       </table>
//     </div>
//   );
// }

// export function FilterableProductTable() {
//   return (
//     <div className="container">
//       <SearchBar />
//       <ProductTable />
//     </div>
//   );
// }
export function Button({ link }) {
  return <a href={link}>Find Out More</a>;
}

export function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

export function CardBody({ date, title, content, link }) {
  return (
    <div className="card-body">
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

export function Card({ image, category, link, date, title, content }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

export function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default function App() {
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "March 20 2022",
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "React and the WP-API",
      date: "March 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "Nomad Lifestyle",
      date: "March 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "Travel",
      link: "#",
    },
  ];

  return (
    <div>
      <div className="">
        <Header title="Latest News" subtitle="Breaking News - Top Stories" />

        {/* cara 1 */}
        {/* <Card
          title={someNews[0].title}
          date={someNews[0].date}
          content={someNews[0].content}
          image={someNews[0].image}
          category={someNews[0].category}
          link={someNews[0].link}
        />
        <Card
          title={someNews[1].title}
          date={someNews[1].date}
          content={someNews[1].content}
          image={someNews[1].image}
          category={someNews[1].category}
          link={someNews[1].link}
        /> */}

        {/* cara 2 */}
        {/* <Card {...someNews[0]} />
        <Card {...someNews[1]} />
        <Card {...someNews[2]} /> */}

        {/* cara 3  dengan mengunakan map*/}
        {someNews.map((news) => (
          <Card {...news} key={news.title} />
        ))}
      </div>
    </div>
  );
}
