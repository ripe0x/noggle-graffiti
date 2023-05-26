export default function Footer() {
  return (
    <div className="flex w-full flex-col border-t border-gray-200 bg-white font-mono text-sm md:flex-row md:items-center md:sticky bottom-0 z-10 justify-between">
      <div className="px-4 py-2 text-center sm:w-2/3 md:py-2 md:text-left text-xs">
        <p className="text-[#344B75]">
          Funded by <strong>Nouns DAO</strong> via{" "}
          <a
            href="https://nouns.wtf/vote/249"
            className="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proposal 249
          </a>
          .
        </p>
        <p className="text-[#344B75]">
          Organized by{" "}
          <a
            href="https://twitter.com/noun40__"
            className="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noun 40
          </a>
          ,{" "}
          <a
            href="https://twitter.com/gregskril"
            className="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Greg Skriloff
          </a>
          , and{" "}
          <a
            href="https://twitter.com/ripe0x"
            className="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ripe
          </a>
        </p>
      </div>
      <div className="sm:w-1/3 max-w-[180px]">
        <img
          src="/brush-noun.jpg"
          alt="Brush Noun after a long day of validating"
          className="w-full"
        />
      </div>
    </div>
  );
}
