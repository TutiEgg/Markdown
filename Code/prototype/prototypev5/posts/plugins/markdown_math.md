# Markdown + Math

Mit diesen Plugin lassen sich Tex Mathe Formeln in Markdown schreiben und darstellen.

## Anwendung
Latex muss immer von $ zeichen umrundet sein.
Latexcode lässt sich anzeigen mit ![Latex anzeigen](/images/markdown_math/display_latex.png)
## Beispiel 1
$$p(t) = 
	\begin{pmatrix}
		-4.5 t^{3} + 6 t^{2} - 1.5 t +1\\
		1.5 t
	\end{pmatrix}$$

```markdown
Formel:
 p(t) = 
	\begin{pmatrix}
		-4.5 t^{3} + 6 t^{2} - 1.5 t +1\\
		1.5 t
	\end{pmatrix}
```
## Beispiel 2
$$\begin{CD} A @>a>> B \\ @VbVV @AAcA \\ C @= D \end{CD}$$

```markdown
Formel:
 $$\begin{CD} A @>a>> B \\ @VbVV @AAcA \\ C @= D \end{CD}$$
```

## Link zum Plugin 
[Link](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath)