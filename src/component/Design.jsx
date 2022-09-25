import desktop from "../images/illustration-editor-desktop.svg";
import mobile from "../images/illustration-editor-mobile.svg";
const Design = () => {
  return (
    <>
      <section className="py-20 px-5">
        <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl">
          Designed for the future
        </h2>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center text-center md:text-left 2xl:max-w-7xl m-auto">
          <div className="mt-10 ">
            <h3 className="text-2xl mt-10 mb-5">
              Introducing an extensible editor
            </h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h3 className="text-2xl mt-10 mb-5"> Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div>
            <picture>
              <source media="(min-width: 1024px)" srcSet={desktop} />
              <img src={mobile} alt="" className="w-full block mx-auto mt-10" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
