import Container from "./components/Container";
import NFTCard from "./components/NFTCard";

function App() {
  const nfts = [
    {
      number: 3429,
      name: "Equilibrium",
      description: "Our Equilibrium collection promotes balance and calm.",
      price: "0.041",
      currency: "ETH",
      daysLeft: 3,
      creatorName: "Jules Wyvern",
    },
  ];
  return (
    <>
      <Container>
        {nfts.map((nft) => (
          <NFTCard
            number={nft.number}
            name={nft.name}
            description={nft.description}
            price={nft.price}
            currency={nft.currency}
            daysLeft={nft.daysLeft}
            creatorName={nft.creatorName}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
