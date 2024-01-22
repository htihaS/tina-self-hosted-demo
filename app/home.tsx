import { Page } from "../components/page";
import { client } from "../tina/__generated__/databaseClient";

export default async function Home() {
  const home = await client.queries.home({ relativePath: "my_document.json" })
  return (
    <Page
      data={JSON.parse(JSON.stringify(home.data))}
      query={home.query}
      variables={home.variables}
    />
  );
}
