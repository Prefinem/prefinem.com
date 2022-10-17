const HomePage = () => {
  console.log("home");

  return (
    <div className="w-[600px] mx-auto mt-8 font-sans text-[#333333] subpixel-antialiased">
      <article>
        <header className="">
          <div className="w-[125px] mx-auto">
            <img src="/images/logo.png" alt="logo" />
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
                href="http://prefinem.com/simple-icon-generator/"
                target="_blank" className="underline text-blue-500 mr-2"
              >
                SIG
              </a>
              (Simple Icon Generator)
            </li>
            <li>
              <a
                href="https://github.com/Prefinem/nativemodels"
                target="_blank" className="underline text-blue-500 mr-2"
              >
                NativeModels
              </a>
              (JS Runtime Type System)
            </li>
            <li>
              <a href="https://github.com/Prefinem/lambdify" target="_blank" className="underline text-blue-500 mr-2">
                Lambdify
              </a>
              (AWS Lambda utility library)
            </li>
            <li>
              <a
                href="https://github.com/Prefinem/lambda-image"
                target="_blank" className="underline text-blue-500 mr-2"
              >
                Lambda Image
              </a>
              (Image library for easy image manipulation on AWS Lambda)
            </li>
            <li>
              <a href="https://github.com/Prefinem/afpf" target="_blank" className="underline text-blue-500 mr-2">
                afpf
              </a>
              (Async Functional Programming Functions)
            </li>
            <li>
              <a href="https://github.com/Prefinem/redux-tools" target="_blank" className="underline text-blue-500 mr-2">
                Redux Tools
              </a>
              (Library to make Redux Easy)
            </li>
          </ul>
        </section>
        <footer className="flex justify-end flex-grow">
            <a href="https://github.com/Prefinem" className="underline text-blue-500">@Prefinem</a>
            &nbsp; | &nbsp;
            <a href="mailto:william@prefinem.com" className="underline text-blue-500">william@prefinem.com</a>
        </footer>
      </article>
    </div>
  );
};

export default HomePage;
