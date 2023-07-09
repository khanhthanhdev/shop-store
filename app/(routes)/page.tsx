import getBillboards from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {

    const billboard = await getBillboards("fbbf382b-440a-4b05-ae76-db2a6d2281df");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;