function HashTable()
{
	this.length = 0;
	this.item = {};
	for (var p in obj)
	{
		if (obj.hasOwnProperty())
		{
			this.item[p] = obj[p];
			this.length++;
		}
	}
	this.setItem = function(key, value)
	{
		var previous = undefined; 
		if(this.hasItem(key))
		{
			previous = this.items[key];
		}else{
			this.length++;
		}
	}
	this.getItem = function(key)
	{
		return this.hasItem(key) ? this.items[key] : undefined;
	}
	this.hasItem = function(key)
	{
		return this.items.hasOwnProperty(key);
	}
	this.returnItem = function(key)
	{
		var values = [];
		for (var k in this.items)
		{
			if(this.hasItem(k))
			{
				values.push(this.items[k]);
			}
		}
	}
	this.each = function(fn)
	{
		for (var k in this.items)
		{
			if(this.hasItem(k))
			{
				fn(k, this.items[k]);
			}
		}
	}
	this.clear = function()
	{
		this.items = {}
		this.length = 0;
	}
}
