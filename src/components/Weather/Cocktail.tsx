import WeatherPagination from './Pagination/WeatherPagination';
import React, { useState, useEffect } from 'react';
import { getCocktailWithWeather } from '../../API/CocktailAPI/index';
import styles from './Cocktail.module.scss';
import { useLocation, useNavigate, Link } from 'react-router-dom';

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type CocktailProps = {
  mainWeather: string;
};

const cocktailPerPageOptions = [
  { screenSize: 'small', cocktailsPerPage: 10 },
  { screenSize: 'medium', cocktailsPerPage: 15 },
  { screenSize: 'large', cocktailsPerPage: 20 },
];

export function Cocktail({ mainWeather }: CocktailProps) {
  const [cocktail, setCocktail] = useState<Drink[]>([]);
  const [cocktailsPerPage, setCocktailsPerPage] = useState(20);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const pageNumber = parseInt(queryParams.get('page') || '1');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(cocktail.length / cocktailsPerPage);
  const firstCocktailIdx = (currentPage - 1) * cocktailsPerPage;
  const lastCocktailIdx = firstCocktailIdx + cocktailsPerPage;
  const currentPageCocktails = cocktail.slice(
    firstCocktailIdx,
    lastCocktailIdx
  );

  useEffect(() => {
    setCurrentPage(() => pageNumber);
  }, [pageNumber]);

  const handlePageQueryChange = (targetPageNumber: number) => {
    if (targetPageNumber < 1) {
      targetPageNumber = 1;
    }
    setCurrentPage(() => targetPageNumber);
    queryParams.set('page', targetPageNumber.toString());
    navigate(`?${queryParams.toString()}`);
  };

  useEffect(() => {
    const getCocktail = async () => {
      try {
        const cocktailData = await getCocktailWithWeather(mainWeather);
        setCocktail(cocktailData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getCocktail();
  }, [mainWeather]);

  useEffect(() => {
    const handleResize = () => {
      const currentScreenSize = getCurrScreenSize();
      const option = cocktailPerPageOptions.find(
        (item) => item.screenSize === currentScreenSize
      );

      if (option) {
        setCocktailsPerPage(option.cocktailsPerPage);

        // Check if current page is still valid
        if (currentPage <= 1) {
          // Check if currentPage is less than or equal to 1
          setCurrentPage(1);
        } else if (
          currentPage > Math.ceil(cocktail.length / option.cocktailsPerPage)
        ) {
          const validPage = Math.ceil(
            cocktail.length / option.cocktailsPerPage
          );
          setCurrentPage(() => validPage);

          // Update URL parameter with valid page
          queryParams.set('page', validPage.toString());
          navigate(`?${queryParams.toString()}`);
        }
      }
    };

    const getCurrScreenSize = () => {
      if (window.innerWidth >= 1024) {
        return 'large';
      } else if (window.innerWidth >= 768) {
        return 'medium';
      } else {
        return 'small';
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cocktail, currentPage]);

  return (
    <div>
      <div className={styles.cocktail}>
        {currentPageCocktails.map((drink) => (
          <div key={drink.idDrink}>
            <Link to={`/detail/${drink.idDrink}`} className={styles.link}>
              {drink.strDrink.length > 20 ? (
                <span>{`${drink.strDrink.substring(0, 17)}...`}</span>
              ) : (
                <span>{drink.strDrink}</span>
              )}
            </Link>
            <Link to={`/detail/${drink.idDrink}`}>
              <img src={drink.strDrinkThumb} alt='drink img'></img>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.page}>
        {currentPageCocktails.length !== 0 && (
          <WeatherPagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageQueryChange={handlePageQueryChange}
          />
        )}
      </div>
    </div>
  );
}
