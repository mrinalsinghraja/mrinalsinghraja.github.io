import {
  type Platform,
  type Project,
  PLATFORM_LABEL,
  platformTag,
} from "@/lib/work";

/**
 * One shipped product: a live dot, the name, and where it runs.
 *
 * The whole row is the link. Anchors are block-level here rather than wrapping
 * a grid in a span, so the hover wash and the focus ring cover the same area
 * the pointer does.
 */
function Row({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="ledger-row"
    >
      <span className="dot-live" aria-hidden="true" />
      <span className="row-name min-w-0 truncate text-[14.5px] text-[var(--ink)]">
        {project.name}
      </span>
      <span className="mono shrink-0 text-[10.5px] tracking-[0.1em] text-[var(--ink-3)]">
        {platformTag(project)}
      </span>
      <span className="sr-only">
        — {project.summary}. Opens {project.name} in a new tab.
      </span>
    </a>
  );
}

/**
 * The shipping ledger. Three tracks, one per platform, each headed by its own
 * count.
 *
 * Grouping by platform rather than by date is the point: the argument this page
 * makes is breadth across three runtimes, and a date-ordered list would bury it.
 * The counts are read from the catalog, so they cannot be wrong.
 */
export function Ledger({
  tracks,
}: {
  tracks: { platform: Platform; list: Project[] }[];
}) {
  return (
    <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map(({ platform, list }) => (
        <section key={platform} aria-labelledby={`track-${platform}`}>
          <div className="mb-1 flex items-baseline justify-between border-b border-[var(--rule-strong)] pb-2">
            <h3 id={`track-${platform}`} className="label !text-[var(--ink-2)]">
              {PLATFORM_LABEL[platform]}
            </h3>
            <span className="mono text-[12px] text-[var(--ink-3)]">
              {list.length}
            </span>
          </div>
          <div>
            {list.map((p) => (
              <Row key={`${platform}-${p.slug}`} project={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
