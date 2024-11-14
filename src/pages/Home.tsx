import Button from '../components/Button/Button';
import SectionWithItems from '../components/Section/SectionWithItems';
import StepItem from '../components/Section/StepItem';

export default function Home() {
  return (
    <main className="bg-soft-white text-midnight-blue">
      <section className="bg-midnight-blue text-soft-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold">Welcome to Pokémon Collection</h1>
        <p className="mt-4 text-xl">Create, explore, and manage your own Pokémon collections without the need for an account.</p>
        <Button href="/collections" className="mt-6 inline-block text-white bg-electric-yellow py-2 px-6 rounded-lg font-semibold hover:bg-midnight-blue hover:text-soft-white transition-all">
          Explore Collections
        </Button>
      </section>
      <SectionWithItems 
        title="How It Works"
        items={[
          {
            title: 'Create a Collection',
            description: 'Start by creating your own Pokémon collection based on types, strengths, or themes. Set a password to manage it later.',
          },
          {
            title: 'Explore Others',
            description: 'Browse other collections to see how fans are organizing their Pokémon.',
          },
          {
            title: 'Manage Your Collections',
            description: 'Revisit and update your collections anytime using the password you set when creating it.',
          },
        ]}
      />
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-midnight-blue">Get Started in 3 Easy Steps</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StepItem title="Create Your Collection" description="Start by creating your own Pokémon collection and set a password for future access." />
          <StepItem title="Select Pokémon" description="Choose Pokémon and organize them into your collection." />
          <StepItem title="Manage & Share" description="Access your collection with your password to update, delete, or share it." />
        </div>
      </section>
    </main>
  );
}