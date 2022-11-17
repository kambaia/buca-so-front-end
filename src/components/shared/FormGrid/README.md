# FormGrid

Zestaw komponentów do budowania jednolitych wizualnie formularzy. `FormGrid` został stworzony w oparciu o wzorzec „compound component”, jednak w razie potrzeby poszczególne składowe mogą być używane jako samodzielne komponenty umieszczane poza `<FormGrid.Grid />`.

## Komponenty

- `Grid` - komponent bazowy, w którym umieszczane są poszczególne elementy formularza.
- `Title` - główny tytuł formularza.
- `Section` - komponent sekcji formularza.
- `Item` - element renderujący kontrolkę formularza.
- `ButtonsGroup` - kontener, w którym umieszczamy przyciski akcji formularza.

## Przykład

```tsx
<FormGrid.Grid>
  <FormGrid.Title title="Nowy użytkownik" />

  <FormGrid.Section title="Dane personalne">
    <FormGrid.Item id="email" label="Adres e-mail" input={<TextField />} />
    <FormGrid.Item id="password" label="Hasło" input={<TextField type="password" />} />
  </FormGrid.Section>

  <FormGrid.Section title="Dodatkowe informacje">
    <FormGrid.Item id="city" label="Miasto" input={<TextField />} />
    <FormGrid.Item id="description" label="Opis" input={<TextField />} />
  </FormGrid.Section>

  <FormGrid.ButtonsGroup>
    <Button variant="outlined" type="reset">
      Wyczyść
    </Button>
    <Button color="primary" variant="contained" type="submit">
      Utwórz konto
    </Button>
  </FormGrid.ButtonsGroup>
</FormGrid.Grid>
```
