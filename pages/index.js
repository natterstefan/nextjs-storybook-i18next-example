import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Home } from '../components/Home';

export const Homepage = (props) => {

  return (
    <>
      <main>
        <Home />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage;