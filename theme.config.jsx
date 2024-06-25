import { useRouter } from "next/router";
import GithubStar from "./src/components/utils/githubstar";

const GITHUB_REPO_STAR = <GithubStar />;

export default {
  primaryHue: 80,
  logo: <span className="text-3xl">IntentJs</span>,
  project: {
    link: "https://github.com/intentjs/core",
    icon: (
      <div className="flex flex-row gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
        <span>{GITHUB_REPO_STAR}</span>
      </div>
    ),
  },
  docsRepositoryBase: "https://github.com/intentjs/docs",
  banner: {
    key: "1.0-release",
    text: (
      <a href="https://intentjs-doc-intentjs.vercel.app/" target="_blank">
        🎉 Intent 1.0 is released. Read more →
      </a>
    ),
  },
  footer: {
    text: (
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
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

        <div className="flex justify-center mt-10">
          <span className="font-semibold">
            {new Date().getFullYear()} ©{" "}
            <a href="https://tryintent.com" target="_blank">
              Intent
            </a>
          </span>
        </div>
      </div>
    ),
  },
  navigation: {
    prev: true,
    next: true,
    gitTimestamp: true,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Intent",
      };
    }
  },
};
