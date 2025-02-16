# Angular Patterns

Follow these rules and guidelines when generating code in the Angular app under the `angular-app` folder

## Service Calls

Use the app.service to make api calls

- All calls should use firstValueFrom to create a single response from http calls
- Get calls should return a promise<void> and store their response into store with an aligned signal to store response data.
- Post calls should allow in a request type for the data its sending, it should get a matching response type. It should also store any returned data on the store.

## Service Calls

### Get

All get calls should follow this example

```typescript
    async get{ResourceName}(): Promise<void> {
        const response = await firstValueFrom(
            this.http.get<{ResourceName}[]>(`${this.apiUrl}/${this.{Resource}Url}`)
        );

        this.store.{resource}.set(response ?? []);
    }
```