export default {
  logo: <span className="text-3xl">IntentJs</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  footer: {
    text: (
      <div className="flex flex-col w-full">
        <span>
          MIT {new Date().getFullYear()} ©{" "}
          <a href="https://nextra.site" target="_blank">
            IntentJs
          </a>
          .
        </span>

        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 mt-5 gap-5">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Features</span>
            <span className="mt-2 text-sm">Home</span>
            <span className="mt-2 text-sm">Docs</span>
            <span className="mt-2 text-sm">Blog</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Support</span>
            <span className="mt-2 text-sm">tryhanalabs.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Support</span>
            <span className="mt-2 text-sm">tryhanalabs.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Social Link</span>
            <span className="mt-2 text-sm">Github</span>
            <span className="text-sm">Twitter</span>
            <span className="text-sm">LinkedIn</span>
          </div>
        </div>
      </div>
    ),
  },
};
