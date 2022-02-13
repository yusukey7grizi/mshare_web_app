import React, { FC } from 'react';
import { Bar } from 'components/organisms';
import { ErrorContent } from 'components/organisms/errorContent';

const ResultNotFound: FC = () => {
  return (
    <Bar>
      <ErrorContent
        title='No Results Found'
        subtitle='該当する作品がありませんでした'
      />
    </Bar>
  );
};

export { ResultNotFound };
