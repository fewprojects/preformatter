# preformatter

Convert < and > to &lt; and &gt; to use in ```<pre>``` tag.

## When to use preformatter

If you're writing a code documentation for your package that needs ```<pre>``` tag to show codes and that's where you need preformatter

preformatter will help you to convert this :

```html
<pre>
<div className="container-980">
    <div className="logo">
    <h5>&lt;pre&gt;<span className="text-info">formatter</span></h5>
</div>
</pre>
```

to this:

```html
<pre>
&lt;div className="container-980"&gt;
    &lt;div className="logo"&gt;
    &lt;h5&gt;&amp;lt;pre&amp;gt;&lt;span className="text-info"&gt;formatter&lt;/span&gt;&lt;/h5&gt;
&lt;/div&gt;
</pre>
```
