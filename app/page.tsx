import Jobs from '@/components/jobs-form/Jobs';

export const metadata = {
  title: 'Job Card',
  description: 'Logic System Job Card',
  authors: [
    {
      name: 'Komal Raut',
      url: 'https://github.com/komal-m-raut',
    },
  ],
};
export const viewport = 'width=device-width, initial-scale=1';
const IndexPage = () => <Jobs />;

export default IndexPage;
