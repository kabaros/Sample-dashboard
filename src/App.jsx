import queryString from 'query-string';

const getDashboardFiltersInfos = () => {
      const params = queryString.parse(window.location.search);
      return (
            params && {
                  ...params,
                  userOrgUnit: params?.userOrgUnit && params?.userOrgUnit.replaceAll(',', ';')
            }
      );
};


const App = (props) => {
      console.log('All props inside:', props)

      const { dashboardItemFilters = {} } = props

      const { pe, ou, ...otherDimensions } = dashboardItemFilters

      return (
            <div className="w-full h-screen">
                  <div className="w-full flex flex-col p-4 gap-2">
                        <div className="border p-5">
                              <h1 className="font-bold text-blue-500 underline">Organisation unit from Filter </h1>
                              <div className="mt-2 flex gap-2 flex-wrap">
                                    {JSON.stringify(ou)}
                              </div>
                        </div>

                        <div className="border p-5">
                              <h1 className="font-bold text-blue-500 underline">Period from Filter </h1>
                              <div> 
                                     {JSON.stringify(pe)}
                              </div>
                        </div>

                        <div className="border p-5">
                              <h1 className="font-bold text-blue-500 underline">Other dimenssions </h1>
                              <div> {JSON.stringify(otherDimensions)} </div>
                        </div>
                  </div>
            </div>
      );
};

export default App;
