export function extractFailureSnippets(
  report: string
): string[] {

  const sections =
    report.split(
      "=================================================="
    );

  const failures =
    sections.filter(section =>
      section.includes("Status: FAILED")
    );

  return failures.map(
    failure => failure.trim()
  );
}