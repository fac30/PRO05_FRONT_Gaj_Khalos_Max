import Button from '../components/Button/Button';
import SectionWithItems from '../components/Section/SectionWithItems';

export default function Home() {
  return (
    <main className="bg-soft-white dark:bg-dark-charcoal text-midnight-blue dark:text-soft-gray">
      <section className="bg-midnight-blue dark:bg-dark-charcoal text-soft-white py-12 px-4 text-center border-b dark:border-white">
        <h1 className="text-4xl font-extrabold">Welcome to Pokémon Collection</h1>
        <p className="mt-4 text-xl">Create, explore, and manage your own Pokémon collections without the need for an account.</p>
        <Button href="/collections" className="mt-6 inline-block text-white bg-electric-yellow dark:bg-electric-yellow py-2 px-6 rounded-lg font-semibold hover:bg-midnight-blue hover:text-soft-white transition-all">
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
      <SectionWithItems 
        title="Get Started in 3 Easy Steps"
        items={[
          {
            title: 'Create Your Collection',
            description: 'Start by creating your own Pokémon collection and set a password for future access.',
          },
          {
            title: 'Select Pokémon',
            description: 'Choose Pokémon and organize them into your collection.',
          },
          {
            title: 'Manage & Share',
            description: 'Access your collection with your password to update, delete, or share it.',
          },
        ]}
      />
    </main>
  );
}