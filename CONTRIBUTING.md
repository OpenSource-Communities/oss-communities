# Contributing to Oss Communities

Contributions are always welcome, no matter how large or small. Before contributing, please read the [Code of Conduct](https://github.com/OpenSource-Communities/.github/blob/main/CODE_OF_CONDUCT.md) and follow the directions in this guide.

## Recommended Communication Style

1. Always include screenshots for visual changes.
2. Always provide a detailed description in the pull request. Leave nothing ambiguous for the reviewer(s).
3. Always review your code first. Be sure to run the project locally and test it before asking for a review.
4. Always communicate in the GitHub repository. Whether it is in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Issues

- When you contribute to the project for the first time, please consider checking the [bug](https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22), [good first issue](https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), or [beginners only](https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22beginners+only%22) labels.

- If you wish to work on an open issue, please comment, and it will be assigned to you. <br> If an issue is not assigned, it is assumed to be available for anyone to work on. Do not work on an issue **before** it's assigned to you to avoid conflicts.

- If you create an issue, our maintainers still need to triage the issue before you can work on it. If you wish to work on the issue you submitted, please inform and tag the maintainers in the comment.

You can always ask for help in our [Community](https://github.com/OpenSource-Communities/intro/discussions) if you get stuck while working on your changes or need clarification.

## Pull Requests (PRs)

We actively welcome your PRs. However, before working on changes, you must ensure that **you are assigned** to an existing issue and **link your work to the issue in your PR template** using a keyword, like `closes #123`.

### Before Submitting a PR Template

1. Ensure that your changes are made in a new branch.

2. Run and check your changes locally. Ensure that everything works as it should.

### Submitting a PR Template

1. Ensure that you address one issue in one PR. <br> If you work on multiple issues, work on them separately and create one PR to address each issue.

2. Complete the PR template. Make sure you **fill in all sections** and that you have:

   - **A valid title**. The PR title must begin with `feat:`, `fix:`, or anything related to your changes.
   - **A related issue**. [Link the issue number](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) that you worked on and add a keyword of "Closes", "Fixes", or "Resolves" in front of it. For example: Closes #123, Fixes #234, etc.

3. Do NOT delete any section of the PR template. <br> If a section is irrelevant to your changes, please explain or respond with "N/A".

### After Submitting a PR Template

1. Ensure that all checks are passed. <br> If you see any GitHub action bots or checks that failed after you submit your PR template, you need to read each one and understand why it failed. Then, you must address and fix it until all of them pass.

2. Do NOT DM maintainers or tag them in the comments to review your PR. <br> Maintainers are always notified whenever there is an incoming PR. If you haven't received a review within a week, please tag them in the PR comments to ask for an estimated review time.

3. Keep your branch up to date while waiting for review and resolve any merge conflicts in your terminal.

4. Respond to and address the reviewer's feedback.

### ⚠️ A PR will be marked as invalid and may be closed if:

- The issue is not assigned to the contributor who opened the PR.
- No issue is linked to the PR.
- The PR template is incomplete, or any section in the template is deleted.
- Changes are made directly in the default (`main`) branch.

## Getting Started

### Setup the Project Locally

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository to your own GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your local machine.
3. Navigate to and open the project in your code editor.
4. Create a new branch to work on your changes. Do NOT work directly on the `main` branch.

   ```bash
   git checkout -b YOUR-BRANCH-NAME
   ```

   Replace "YOUR-BRANCH-NAME" with a descriptive name for your branch — for example, `feat/add-submit-button`.

5. Install the dependencies and run the project.

### Local Development

> [!NOTE]
> Always test the changes locally to see if they're working.

1. **Install the dependencies and run the project locally**.

2. **Make and test changes**.

   With the local server running, you can make changes to the files and immediately see the results in your browser. Test your changes thoroughly.

3. **Stop the server**.

   After completing and testing the changes, you can stop the local server by pressing `Ctrl + C` in the terminal.
