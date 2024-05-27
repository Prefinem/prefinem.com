const HomePage = () => {
  console.log("home");

  return (
    <div className="w-[600px] mx-auto mt-8 font-sans text-[#333333] subpixel-antialiased">
      <article>
        <header className="">
          <div className="w-[125px] mx-auto">
            <img alt="logo" src="/images/logo.png" />
          </div>
          <h1 className="text-2xl">
            Prefinem <span className="text-xl">· \ prē-fi-,nem \</span>
          </h1>
        </header>
        <section className="border-b border-t border-gray-300 py-6 my-6">
          <p className="mb-2">
            My name is William and this is my personal site. I am developer,
            architect and system admin. My hobbies include gaming and
            programming, although not necessarily in that order.
          </p>
          <p className="mb-2">
            Most of the programming I do is in Node on AWS Lambda and
            integrating ElasticSearch, but I still dabble in ColdFusion, PHP and
            a few other languages here and there.
          </p>
          <p>Here are a few of my latest projects:</p>
          <ul className="list-disc ml-6">
            <li>
              <a
                className="underline text-blue-500 mr-2"
                href="http://prefinem.com/simple-icon-generator/"
                rel="noreferrer"
                target="_blank"
              >
                SIG
              </a>
              (Simple Icon Generator)
            </li>
            <li>
              <a
                className="underline text-blue-500 mr-2"
                href="https://github.com/Prefinem/nativemodels"
                rel="noreferrer"
                target="_blank"
              >
                NativeModels
              </a>
              (JS Runtime Type System)
            </li>
            <li>
              <a
                className="underline text-blue-500 mr-2"
                href="https://github.com/Prefinem/lambdify"
                rel="noreferrer"
                target="_blank"
              >
                Lambdify
              </a>
              (AWS Lambda utility library)
            </li>
            <li>
              <a
                className="underline text-blue-500 mr-2"
                href="https://github.com/Prefinem/lambda-image"
                rel="noreferrer"
                target="_blank"
              >
                Lambda Image
              </a>
              (Image library for easy image manipulation on AWS Lambda)
            </li>
            <li>
              <a
                className="underline text-blue-500 mr-2"
                href="https://github.com/Prefinem/afpf"
                rel="noreferrer"
                target="_blank"
              >
                afpf
              </a>
              (Async Functional Programming Functions)
            </li>
            <li>
              <a
                className="underline text-blue-500 mr-2"
                href="https://github.com/Prefinem/redux-tools"
                rel="noreferrer"
                target="_blank"
              >
                Redux Tools
              </a>
              (Library to make Redux Easy)
            </li>
          </ul>
        </section>
        <footer className="flex justify-end flex-grow">
          <a
            className="underline text-blue-500"
            href="https://github.com/Prefinem"
          >
            @Prefinem
          </a>
        </footer>
      </article>
    </div>
  );
};

export default HomePage;
