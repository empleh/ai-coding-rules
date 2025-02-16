# API Controller Patterns

Follow these rules and guidelines when generating code in the Web API for Controllers under the `API/API/Controllers` folder

## Base Template (REQUIRED)
Every controller MUST follow this exact structure:

```csharp
[Route("api/[controller]")]
public class {ResourceName}Controller : ApiControllerBase
{
    [HttpGet]
    [Route("{id}")]
    public async Task<{ResourceName}GetResponse> Get{Resource}([FromRoute] Guid id)
    {
        Logger.LogInformation("Get{Resource}");

        var request = new {Resource}GetRequest
        {
            Id = id
        };

        var response = ({Resource}GetResponse)await ServiceLocator.GetService<I{Resource}Manager>().Get{Resource}(request);

        return response;
    }

    [HttpPost]
    [Route("store")]
    public async Task<{ResourceName}GetResponse> Store{Resource}([FromBody] {Resource}StoreRequest request)
    {
        Logger.LogInformation("Store{Resource}");

        var response = ({Resource}StoreResponse)await ServiceLocator.GetService<I{Resource}Manager>().Store{Resource}(request);

        return response;
    }
}
```