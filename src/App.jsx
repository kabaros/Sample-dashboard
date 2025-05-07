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


const App = () => {
      return (
            <div className="w-full h-screen">
                  <div className="w-full flex flex-col p-4 gap-2">
                        <div className="border p-5">
                              <h1 className="font-bold text-blue-500 underline">Organisation unit from Filter </h1>
                              <div className="mt-2 flex gap-2 flex-wrap">
                                    {getDashboardFiltersInfos()
                                          ?.userOrgUnit?.split(';')
                                          ?.map((ouID, index) => (
                                                <div
                                                      key={index}
                                                      className="mt-2 bg-slate-100 p-1 border rounded-2xl text-sm"
                                                >
                                                      {ouID}
                                                </div>
                                          ))}
                              </div>
                        </div>

                        <div className="border p-5">
                              <h1 className="font-bold text-blue-500 underline">Period from Filter </h1>
                              <div>  </div>
                        </div>

                        <div className="border p-5">
                              <h1 className="font-bold text-blue-500 underline">Other dimenssions </h1>
                              <div> </div>
                        </div>
                  </div>
            </div>
      );
};

export default App;
